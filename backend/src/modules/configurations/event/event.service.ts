import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Events } from './event.model';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { CreateEventDTO, UpdateEventDTO } from './dtos';
import { MetaData } from '../metaData/meta.model';
import * as fs from 'fs';
import { FindAndCountOptions, Op, OrderItem } from 'sequelize';
@Injectable()
export class eventService extends GenericService<
  Events,
  CreateEventDTO,
  UpdateEventDTO
>({
  defaultFindOptions: {
    include: [MetaData],
  },
  includes: [MetaData],
}) {
  constructor(
    @InjectModel(Events) private event: typeof Events,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData,
  ) {
    super(event, reqParams);
  }

  async updateEventImage(file: Express.Multer.File, id: string) {
    try {
      const Events = await this.getOne<Events>(id);
      if (!Events) {
        throw new InternalServerErrorException('Blog not found');
      }

      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + Events.eventImage,
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

        await Events.update({
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
  s;
  async eventListing(date: string) {
    if (date) {
      const currentDate: Date = new Date();
      if (date === 'upcoming') {
        const events = await this.event.findAll({
          where: {
            startDayTime: {
              [Op.gt]: currentDate,
            },
          },
        });
        return events;
      } else if (date === 'past') {
        const events = await this.event.findAll({
          where: {
            startDayTime: {
              [Op.lt]: currentDate,
            },
          },
        });
        return events;
      } else if (date === 'webinar' || date === 'event') {
        const events = await this.event.findAll({
          where: {
            eventType: {
              date,
            },
          },
        });
        return events;
      }
    } else {
      return await this.event.findAll();
    }
  }
}
