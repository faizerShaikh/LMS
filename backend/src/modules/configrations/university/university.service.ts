import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { University } from './model';
import { CreateUniversityDTO, UpdateUniversityDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class UniversityService extends GenericService<
  University,
  CreateUniversityDTO,
  UpdateUniversityDTO
>({}) {
  constructor(
    @InjectModel(University) private university: typeof University,
    private reqParams: RequestParamsService,
  ) {
    super(university, reqParams);
  }

  async updateUniversityImage(file: Express.Multer.File, id: string) {
    const university = await this.getOne<University>(id);

    if (university.university_image) {
      unlink(
        join(
          __dirname,
          '../../../../',
          'src/public/media' + university.university_image,
        ),
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await university.update({
      university_image: file?.path?.split('src/public')[1],
    });
    return 'University Image Uploaded Successfully';
  }
}
