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
    try {
      const gallery = await this.getOne<gallery>(id);
      if (!gallery) {
        throw new InternalServerErrorException("Blog not found");
      }
  
      const defaultImagePath = 'backend/src/public/media/default.png'; 
      const filePath = join(__dirname, '../../../../', 'backend/src/public/' + gallery.coverImage);
      
      if (file && file.filename) {
        const newImagePath = '/media/pressRelease/' + file.filename;
  
        if (fs.existsSync(filePath)&& filePath!=defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }
  
        await gallery.update({
          coverImage: newImagePath,
        });
  
        return 'gallery Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
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
