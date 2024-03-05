import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { gallery } from './gallery.model';
import { GalleryDto, UpdateGalleryDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import * as fs from 'fs'
@Injectable()
export class GalleryService extends GenericService<
  gallery,
  GalleryDto,
  UpdateGalleryDTO
>({}) {
  constructor(
    @InjectModel(gallery) private Gallery: typeof gallery,
    private reqParams: RequestParamsService,
  ) {
    super(Gallery,reqParams);
  }

  async UpdateGalleryImage(file: Express.Multer.File, id: string) {
    const gallery = await this.getOne<gallery>(id);
    const filepath = join(__dirname, '../../../../', '/src/public/' + gallery.coverImage)
    if (fs.existsSync(filepath)) { 
      unlink(
        filepath,
        (err) => {
          if (err) { 
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted');
        },
      );
      await gallery.update({
        coverImage: 'media/gallery/' + file.filename,
      });
      
      return 'Gallery Image Uploaded Successfully';
    }else{

      await gallery.update({
        coverImage: 'media/gallery/' + file.filename,
      });
      
      return 'Gallery Image Uploaded Successfully';
    }
  }

  

  async newGallery(data: any, files: Express.Multer.File): Promise<any> {
    const pageIds = data.data.map(item => item.pageId);
    await this.Gallery.destroy({ where: { pageId: pageIds } });
    const dataToCreate = []; 
    console.log(data.data.entries())
    for (const [index, value] of data.data.entries()) {
      const { id, ...rest } = value;
      if (files[index]) {
        dataToCreate.push({
          ...rest,
          coverImage: 'media/gallery/' + files[index].filename
        });
      } else {
        dataToCreate.push({ ...rest });
      }
    }
    if (dataToCreate.length > 0) {
      console.log('bulk create data:', dataToCreate);
      await this.Gallery.bulkCreate(dataToCreate);
      console.log('data:', dataToCreate);
    }
    return dataToCreate;
  }
  
  async createBulk(data: any, files: Express.Multer.File, id: string): Promise<any> {
    try {
      let dataToCreate = [];
      let dataToUpdate = [];
      let idsToDelete=[]
      console.log(data)
      for (const [index, value] of Object.entries(data.data) as any) {
        if (value.id != 'undefined') {
          idsToDelete.push(value.id);
          const {id,...rest}=value
          if (files[index]) {
            dataToUpdate.push({
              ...rest,
              coverImage: 'media/gallery/' + files[index].filename
            });
          } else {
            dataToUpdate.push({ ...rest });
          }
        } else {
          if (files[index]) {
            dataToCreate.push({
              ...value,
              coverImage: 'media/gallery/' + files[index].filename
            });
          } else {
            dataToCreate.push({
              ...value,
              
            })
          }
        }
      }
      if (idsToDelete.length > 0) {
        console.log('idsToDelte===============================>',idsToDelete)
        await this.Gallery.destroy({ where: { id: idsToDelete } });
      }
      if (dataToUpdate.length > 0) {
        dataToCreate.push(...dataToUpdate)
      }
      if (dataToCreate.length > 0) {

        console.log('bulk create data :',dataToCreate)
        await this.Gallery.bulkCreate(dataToCreate);
        console.log('data========================================>',dataToCreate)
        
        return dataToCreate
      }
  
      return { success: true, dataToUpdate, dataToCreate };
    } catch (error) {
      console.error('Error in createBulk:', error);
      return { success: false, error: error.message };
    }
  }
  


  async updateBulk(data:any[]){
    await this.Gallery.bulkCreate(data,{updateOnDuplicate:["id"]})
  }
}
