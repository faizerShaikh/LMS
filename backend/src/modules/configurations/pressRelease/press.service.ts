import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Press } from "./press.model";
import { join } from "path";
import { unlink } from "fs";
import { MetaData } from "../metaData/meta.model";
import * as fs from 'fs'
@Injectable()
export class PressService extends GenericService({
    defaultFindOptions:{
        include:[MetaData]
    },
    includes:[MetaData]
}){
    constructor(
        @InjectModel(Press)private press : typeof Press,
        private reqParams : RequestParamsService ,
    ){super(press,reqParams)}

    async updateCoverImage(file: Express.Multer.File, id: string) {
        try {
          const press = await this.getOne<Press>(id);
          if (!press) {
            throw new InternalServerErrorException("Blog not found");
          }
      
          const defaultImagePath = 'backend/src/public/media/default.png'; 
          const filePath = join(__dirname, '../../../../', 'backend/src/public/' + press.coverImage);
          
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
      
            await press.update({
              coverImage: newImagePath,
            });
      
            return 'Press Image Uploaded Successfully';
          } else {
            return 'No file provided for Image Update';
          }
        } catch (error) {
          throw new InternalServerErrorException(error.message);
        }
      }

}