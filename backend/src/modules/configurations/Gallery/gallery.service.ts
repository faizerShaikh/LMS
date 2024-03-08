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

  async updateBulk(data:any[]){
    await this.Gallery.bulkCreate(data,{updateOnDuplicate:["id"]})
  }
}
