import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { University } from './model';
import { CreateUniversityDTO, UpdateUniversityDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../Meta Data/meta.model';
import { type } from '../Meta Data/dto/type.enum';

@Injectable()
export class UniversityService extends GenericService<
  University,
  CreateUniversityDTO,
  UpdateUniversityDTO
>({
  includes:[MetaData]
}) {
  constructor(
    @InjectModel(University) private university: typeof University,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData
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

  async create<University>(dto: CreateUniversityDTO,): Promise<University> {
    const university = await super.create(dto)
    await this.createOtherObjects(dto,university,true);
    return university
  }

  async createOtherObjects(
    dto: CreateUniversityDTO|UpdateUniversityDTO,
    university:University,
    isNewRecord:boolean
  ){
    if(isNewRecord){
      await this.metaData.create({
        ...dto.metaData,
        universityID:university.id,
        type:type.UNIVERSITY
      })
    }
    else {
      if(dto.metaData){
        await this.metaData.update<MetaData>(
          {...dto.metaData},
          {
            where:{
              universityID:university.id
            }
          }
        )
      }
    }
  }
  
  async update<University >(data: UpdateUniversityDTO, id: string): Promise<University> {
    try{
      
    const university= await super.update(data,id) ;
    await this.createOtherObjects(data,university,false);
    return university
    } catch (err){
      console.error("Error occurred in update method",err)
    } }

}
