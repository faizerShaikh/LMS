import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../Meta Data/meta.model';
import { type } from '../Meta Data/dto/type.enum';

@Injectable()
export class CourseService extends GenericService<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({includes:[MetaData]}) {
  constructor(
    @InjectModel(Course) private course: typeof Course,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData: typeof MetaData,
  ) {
    super(course, reqParams);
  }

  async updateCourseImage(file: Express.Multer.File, id: string) {
    const course = await this.getOne<Course>(id);

    if (course.course_image) {
      unlink(
        join(
          __dirname,'../../../../', '/src/public/' + course.course_image,
        ),
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await course.update({
      course_image: '/media/course/'+ file.filename,
    });
    return 'Course Image Uploaded Successfully';
  }

  async CreateOtherObject(
    dto:CreateCourseDTO | UpdateCourseDTO,
    course:Course,
    isNewRecord:boolean
  ){
    if (isNewRecord) {
      await this.metaData.create({
        ...dto.metaData,
        courseID: course.id,
        type: type.COURSE,
      });
    }else{
      if(dto.metaData){
        await this.metaData.update<MetaData>(
          {...dto.metaData},{
            where:{
              courseID:course.id
            }
          }
        )
      }
    }
  }

  async create<Course>(dto: CreateCourseDTO): Promise<Course> {
    const course= await super.create(dto)
    await this.CreateOtherObject(dto,course,true)
    return course 
  }
  
  async update<Course>(data: UpdateCourseDTO, id: string): Promise<Course> {
    const course= await super.update(data,id)
    await this.CreateOtherObject(data,course,false)
    return course
  }
}
