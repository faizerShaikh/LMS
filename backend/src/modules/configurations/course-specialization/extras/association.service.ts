import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';
import { AssociationsDTO } from '../dtos/associations.dto';
import { Associations } from '../model/associations.model';

@Injectable()
export class AssociationService extends GenericService<
  Associations,
  AssociationsDTO,
  AssociationsDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(Associations)
    private associationModel: typeof Associations,
    private reqParams: RequestParamsService,
  ) {
    super(associationModel, reqParams);
  }

  async create<Model extends {} = any>(dto: AssociationsDTO): Promise<Model> {
    return super.create(dto);
  }

  async createAssociation(courseSpecializationId: string, otherData: any) {
    try {
      console.log('Creating association for course specialization ID:', courseSpecializationId);
      
      // Create the association with the provided data
      const association = await this.associationModel.create({
        ...otherData,
        course_specialization_id: courseSpecializationId,
      });

      console.log('Association created:', association);

      return association;
    } catch (error) {
      console.error('Error creating association:', error);
      throw new InternalServerErrorException('Error creating association');
    }
  }

  async getAssociationsByCourseSpecializationId(courseSpecializationId: string) {
    try {
      console.log('Fetching associations for course specialization ID:', courseSpecializationId);
      const associations = await this.associationModel.findAll({
        where: { course_specialization_id: courseSpecializationId },
      });
      console.log('Found associations:', associations);
      if (!associations || associations.length === 0) {
        console.log('No associations found');
        throw new NotFoundException('Associations not found for the given course specialization ID');
      }
      return associations;
    } catch (error) {
      console.error('Error fetching associations:', error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateAssociationImage(file: Express.Multer.File, id: string) {
    if (file) {
      const association = await this.getOne<Associations>(id);
      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        '/src/public/' + association.image,
      );

      if (fs.existsSync(filePath)) {
        unlink(filePath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
      }

    await association.update({
      image: '/media/course-specialization/extras/' + file.filename,
    });
    return 'Association Image Uploaded Successfully';
  }
}}
