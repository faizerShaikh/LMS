import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { EventFeature, Events } from './event.model';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { CreateEventFeatureDTO, UpdateEventFeatureDTO } from './dtos';
import { MetaData } from '../MetaData/meta.model';
import * as fs from 'fs';

@Injectable()
export class EventFeatureService extends GenericService<
  EventFeature,
  CreateEventFeatureDTO,
  UpdateEventFeatureDTO
>({
  defaultFindOptions: {
    include: [MetaData],
  },
  includes: [MetaData],
}) {
  constructor(
    @InjectModel(EventFeature) private eventFeature: typeof EventFeature,
    private reqParams: RequestParamsService,
  ) {
    super(eventFeature, reqParams);
  }

  async create<Model extends {} = any>(
    dto: CreateEventFeatureDTO,
  ): Promise<Model> {
    return super.create(dto);
  }

  async getEventfeatures(eventId: string, type: string) {
    return this.eventFeature.findAll({
      where: {
        eventId,
        type,
      },
    });
  }

  async updateEventFeatureImage(file: Express.Multer.File, id: string) {
    try {
      const eventFeature = await this.eventFeature.findByPk(id);
      if (!eventFeature) {
        throw new InternalServerErrorException('Event Feature not found');
      }

      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + eventFeature.image,
      );

      if (file && file.filename) {
        const newImagePath =
          '/media/event/event-feature-image/' + file.filename;

        if (fs.existsSync(filePath) && filePath != defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await eventFeature.update({
          image: newImagePath,
        });

        return 'Events Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
