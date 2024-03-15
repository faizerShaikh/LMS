import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { gallery } from './gallery.model';
import { GalleryDto, UpdateGalleryDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import * as fs from 'fs';
import { Op } from 'sequelize';

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
        throw new InternalServerErrorException("Card not found");
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
  

  async createBulk(data: any, files: Express.Multer.File[] ): Promise<any> {
    try {
    let dataToCreate = [];
    let dataToUpdate = [];
    
    const pageIDs= data.data.map(item=>item.pageId)

    const newId = data.data.map(item => item.id);
    await this.Gallery.destroy({ where: { id: { [Op.notIn]: newId }, pageId: pageIDs} });
    
    for (const [index, value] of Object.entries(data.data) as any) {
        const fileIndex = parseInt(index);
        const file = files.find(file => {
            const match = file.fieldname.match(/\[(\d+)\]/);
            return match && parseInt(match[1]) === fileIndex;
        });
        if (value.id!='undefined') {
            if (file) {
                dataToUpdate.push({
                    ...value,
                    coverImage: 'media/gallery/' + file.filename
                });
            } else {
                dataToUpdate.push({ ...value });
            }
        } else if (value.id==='undefined') {
            const{id,...rest}=value
            if (file) {
                console.log('=============================================>>>>', file);
                dataToCreate.push({
                    ...rest,
                    coverImage: 'media/gallery/' + file.filename
                });
            } else if (!data.data.coverImage){
              dataToCreate.push({
                ...rest,
                coverImage: 'media/default.png'
            });
                console.error(`No file found for index ${index} for creation`);
            }
        }
    }

    if (dataToUpdate.length > 0) {
        console.log('data to update=========================================>',dataToUpdate)
        await this.Gallery.bulkCreate(dataToUpdate, { updateOnDuplicate:["id","name","description","orderBy","coverImage"]});
    }

    if (dataToCreate.length > 0) {
      console.log('data to create=========================================>',dataToCreate)
        await this.Gallery.bulkCreate(dataToCreate);
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
