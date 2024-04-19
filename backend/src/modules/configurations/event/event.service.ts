import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { EventFeature, Events } from './event.model';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { CreateEventDTO, UpdateEventDTO } from './dtos';
import { MetaData } from '../MetaData/meta.model';
import * as fs from 'fs';
import { Op, col, literal } from 'sequelize';
import { EventFeatureType } from './enum';

@Injectable()
export class EventService extends GenericService<
  Events,
  CreateEventDTO,
  UpdateEventDTO
>({
  defaultFindOptions: {
    where: {
      webinarId: null,
    },
  },
  includes: [
    { model: MetaData },
    {
      model: EventFeature,
      foreignKey: 'eventId',
      as: 'eventFeatures',
      required: false,
      where: {
        type: EventFeatureType.FEATURE,
      },
    },
    {
      model: EventFeature,
      foreignKey: 'eventId',
      as: 'applicationProcess',
      required: false,
      where: {
        type: EventFeatureType.APPLICATION_PROCESS,
      },
    },
    {
      model: EventFeature,
      foreignKey: 'eventId',
      as: 'selectionProcess',
      required: false,
      where: {
        type: EventFeatureType.SELCTION_PROCESS,
      },
    },
    {
      model: EventFeature,
      foreignKey: 'eventId',
      as: 'winners',
      required: false,
      where: {
        type: EventFeatureType.WINNER,
      },
    },
  ],
}) {
  constructor(
    @InjectModel(Events) private event: typeof Events,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData,
  ) {
    super(event, reqParams);
  }

  async create<Model extends {} = any>(dto: CreateEventDTO): Promise<Model> {
    return super.create(dto);
  }

  async updateSyllabus(file: Express.Multer.File, id: string) {
    try {
      const events = await this.event.findByPk<Events>(id);
      if (!events) {
        throw new InternalServerErrorException('Event not found');
      }

      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + events.eventImage,
      );

      if (file && file.filename) {
        const newImagePath = '/documents/' + file.filename;

        if (fs.existsSync(filePath)) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await events.update({
          syllabus: newImagePath,
        });

        return 'Events Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
}


  async updateEventImage(file: Express.Multer.File, id: string) {
    try {
      const events = await this.event.findByPk<Events>(id);
      if (!events) {
        throw new InternalServerErrorException('Event not found');
      }

      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + events.eventImage,
      );

      if (file && file.filename) {
        const newImagePath = '/media/event/' + file.filename;

        if (fs.existsSync(filePath) && filePath != defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await events.update({
          eventImage: newImagePath,
        });

        return 'Events Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateStratigicPartners(files: Express.Multer.File[], id: string) {
    try {
      const events = await this.event.findByPk(id);
      if (!events) {
        throw new InternalServerErrorException('Blog not found');
      }

      if (files && files.length) {
        let stratigicPartners: any = [];
        for (const item of events.stratigicPartners) {
          const filePath = join(
            __dirname,
            '../../../../',
            'backend/src/public/' + item,
          );
          if (fs.existsSync(filePath)) {
            unlink(filePath, (err) => {
              if (err) {
                console.error('Error deleting old image:', err);
              } else {
                console.log('Old image deleted...');
              }
            });
          }
        }
        for (const file of files) {
          stratigicPartners.push(
            '/media/event/strategic-partner/' + file.filename,
          );
        }

        events.stratigicPartners = stratigicPartners;
        await events.save();

        return 'Events Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async eventListing(data: any) {
    let filters = {};

    const currentDate: Date = new Date();
    if (data.date === 'upcoming') {
      filters['startDayTime'] = {
        [Op.gt]: currentDate,
      };
    }

    if (data.date === 'past') {
      filters['startDayTime'] = {
        [Op.lt]: currentDate,
      };
    }

    if (data.type) {
      filters['eventType'] = data.type;
    }

    const resp = await this.event.findAll({
      where: {
        ...filters,
      },
    });

    return resp;
  }
}
