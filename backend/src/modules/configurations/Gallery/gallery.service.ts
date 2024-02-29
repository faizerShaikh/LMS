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
  
      for (const [index, value] of (Object.entries(data.data) as any)) {
        if (value.id) {
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
            // Handle the case where there's no file for creation
            console.error(`No file found for index ${index} for creation`);
          }
        }
      }
  
      // Bulk create the updated data if there's any
      if (dataToUpdate.length > 0) {
        await this.Gallery.bulkCreate(dataToUpdate, { updateOnDuplicate: ["id"] });
      }
  
      // Bulk create the new data if there's any
      if (dataToCreate.length > 0) {
        await this.Gallery.bulkCreate(dataToCreate);
      }
  
      return { success: true, dataToUpdate, dataToCreate };
    } catch (error) {
      console.error('Error in createBulk:', error);
      return { success: false, error: error.message };
    }
  }
  

// async createBulk(data: any, files: Express.Multer.File,id:string): Promise<any> {
//     try {
// let dataToCreate=[] 
// let dataToUpdate=[]

// for (const [index,value] of (Object.entries(data.data) as any)) {
//   if(value.id){ 
//     if (files[index]) {
//     dataToUpdate.push({
//       ...value,
//       coverImage: 'media/gallery/' + files[index].filename
//     });
//   }else{
//       dataToUpdate.push({...value})
//   }
  
// }
// else{
//   dataToCreate.push({ 
//     ...value,
//     coverImage: 'media/gallery/' + files[index].filename, 
//   })
// }
// // await this.Gallery.bulkCreate(dataToUpdate,{updateOnDuplicate:["id"]})
// await this.Gallery.bulkCreate(dataToCreate);
//       // const Create = data.data.filter(item=>!item.id)
//       // const Update = data.data.filter(item=>!!item.id)
      
//       // if (Update && !files ) {
//       //   await this.Gallery.bulkCreate(data,{updateOnDuplicate:["id"]})
//       // }else{

//       //   const updatedData = data.data.map((item, index) => ({
//       //     ...item,
//       //     coverImage: 'media/gallery/' + files[index].filename, 
//       //   }));
        
//       //   console.log("The updated data is", updatedData);
//       //   const createGallery = await this.Gallery.bulkCreate(updatedData);
        
//         return { success: true,dataToUpdate,dataToCreate };
//       }
//       } catch (error) {
//         return { success: false, error: error.message };
//     }
// }


  async updateBulk(data:any[]){
    await this.Gallery.bulkCreate(data,{updateOnDuplicate:["id"]})
  }
}
