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



  async createBulk(data: any, files: Express.Multer.File, id: string): Promise<any> {
    try {
      let dataToCreate = [];
      let dataToUpdate = [];
      console.log(data)
      for (const [index, value] of Object.entries(data.data) as any) {
        if (value.id != 'undefined') {
          if (files[index]) {
            dataToUpdate.push({
              ...value,
              coverImage: 'media/gallery/' + files[index].filename
            });
          } else {
            dataToUpdate.push({ ...value });
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
  
      // Perform bulk updates
      if (dataToUpdate.length > 0) {
        console.log('Bulk update data:', dataToUpdate); // Log the data to be updated
        const updatedData= await this.Gallery.bulkCreate(dataToUpdate, { updateOnDuplicate: ["name","description","orderBy","coverImage"] });
        console.log('updated data===============>',updatedData)
      }
  
      // Perform bulk inserts
      if (dataToCreate.length > 0) {
        await this.Gallery.bulkCreate(dataToCreate);
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
