import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { CourseSpecialization } from './model';
import {
  CreateAdmissionProcessCardsDTO,
  CreateCourseSpecializationDTO,
  FeesStructureDTO,
  ProgramStructureDTO,
  UpdateCourseSpecializationDTO,
} from './dtos';
import { CourseSpecializationService } from './course-specialization.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';
import { AssociationsDTO } from './dtos/associations.dto';
import { ProgramHighlightDTO } from './dtos/program-highlights.dto';

@Controller('configurations/course-specialization')
export class CourseSpecializationController extends GenericController<
  CourseSpecialization,
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO
>({
  createObjDTO: CreateCourseSpecializationDTO,
  updateObjDTO: UpdateCourseSpecializationDTO,
}) {
  constructor(private readonly courseService: CourseSpecializationService) {
    super(courseService);
  }

  @Put('cover-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'cover_image',
      path: '/media/course-specialization/cover-image',
    }),
  )
  updateCourseSpecializationImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.courseService.updateCourseSpecializationImage(file, id);
  }

  // @Put('update-obj-image/:id')
  // @UseInterceptors(
  //   MulterIntercepter({
  //     type: MulterEnum.any,
  //     fieldName:'image',
  //     path: '/media/course-specialization/extras',
  //   }),
  // )
  // async createCourseSpecialization(
  //   @UploadedFile() files: Express.Multer.File[],
  //   @Param('id') id: string,
  //    dto : CreateCourseSpecializationDTO,
  //    @Body() body : CourseSpecialization
  // ) {
  //   return this.courseService.createOtherObjects(dto, body,true);
  // }

  @Get('courses-list/:courseId')
  async findByCourseId(@Param('courseId') courseId: string): Promise<CourseSpecialization[]> {
    return this.courseService.findbyCourses(courseId);
  }

  @Post('fees/:id')
  async feesStructure(
     @Body() body : FeesStructureDTO,
     @Param('id') id : string
  ) {
    return this.courseService.createFeesStructure(body,id);
  }

  @Post('program-structures/:id')
  async createProgramStructures(
    @Body() body: ProgramStructureDTO[],
    @Param('id') id: string
  ) {
    try {
      const message = await this.courseService.createProgramStructures(body, id);
      return { message };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create program structures.');
    }
  }

  @Post('program-highlights/:id')
  async createProgramHighlights(
    @Body() body: ProgramHighlightDTO[],
    @Param('id') id: string
  ) {
    try {
      const message = await this.courseService.createProgramHighlights(body, id);
      return { message };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create program highlights.');
    }
  }

  @Post('admission-processes/:id')
  async createAdmissionProcesses(
    @Body() body: CreateAdmissionProcessCardsDTO[],
    @Param('id') id: string
  ) {
    try {
      const message = await this.courseService.createAdmissionProcesses(body, id);
      return { message };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create admission processes.');
    }
  }

  @Post('associations/:id')
  async createAssociations(
    @Body() body: AssociationsDTO[],
    @Param('id') id: string
  ) {
    try {
      const message = await this.courseService.createAssociations(body, id);
      return { message };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create associations.');
    }
  }

  @Put('update-syllabus')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'syllabus',
      path: '/documents',
    }),
  )
  async updateSyllabus(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ){
    return this.courseService.updatesyllabus(file,id)
  }
}
