import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Press } from "./press.model";
import { join } from "path";
import { unlink } from "fs";
import { MetaData } from "../metaData/meta.model";

@Injectable()
export class PressService extends GenericService({
    defaultFindOptions:{
        include:[MetaData]
    }
}){
    constructor(
        @InjectModel(Press)private press : typeof Press,
        private reqParams : RequestParamsService ,
    ){super(press,reqParams)}

    async updateCoverIamge(file:Express.Multer.File,id:string){
        const press= await this.getOne<Press>(id)
        if(press.coverImage){
            unlink(join(__dirname,'../../../../','/src/public'+press.coverImage),
            (err)=>{
                if(err){
                    throw new InternalServerErrorException(err)
                }
                console.log('file deleted...')
            }
            )
        }
        await press.update({
            coverImage:'/media/pressRelease/'+file.filename
        })
        return 'Cover Image for pressRelease is Uploaded'
    }

}