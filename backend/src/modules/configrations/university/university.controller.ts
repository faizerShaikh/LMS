import {
  Controller,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { University } from './model';
import { CreateUniversityDTO, UpdateUniversityDTO } from './dtos';
import { UniversityService } from './university.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configrations/university')
export class UniversityController extends GenericController<
  University,
  CreateUniversityDTO,
  UpdateUniversityDTO
>({
  createObjDTO: CreateUniversityDTO,
  updateObjDTO: UpdateUniversityDTO,
}) {
  constructor(private readonly universityService: UniversityService) {
    super(universityService);
  }

  @Put('university-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'university_image',
      path: '/media/university',
    }),
  )
  updateUniversityImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.universityService.updateUniversityImage(file, id);
  }
}
