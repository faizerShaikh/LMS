import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Press } from "./press.model";
import { join } from "path";
import { unlink } from "fs";
import { PressDTO, UpdatePressDTO } from "./dto";
import { MetaData } from "../Meta Data/meta.model";
import { MetaDataDto } from "../Meta Data/dto";
import { type } from "../Meta Data/dto/type.enum";

@Injectable()
export class PressService extends GenericService({
    includes:[MetaData]
}){
    constructor(
        @InjectModel(Press)private press : typeof Press,
        private reqParams : RequestParamsService ,
        @InjectModel(MetaData) private metaData: typeof MetaData
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
        return 'Cover Image for Press Release is Uploaded'
    }

    async  create<Press>(dto: PressDTO): Promise<Press> {
        const press=await super.create(dto)
        await this.createOtherObject(dto,press,true)
        return press
    }
    async update<Press >(data: UpdatePressDTO, id: string): Promise<Press> {
        const press= await super.update(data,id)
        await this.createOtherObject(data,press,false);
        return press
    }

    async createOtherObject(
        dto:PressDTO|UpdatePressDTO,
        press:Press,
        isNewRecord:boolean
    ){
        
        if(isNewRecord){
            await this.metaData.create({
              ...dto.metaData,
              pressID:press.id,
              type: type.MEDIA 
            })
          }
          else {
            if(dto.metaData){
              await this.metaData.update<MetaData>(
                {...dto.metaData},
                {
                  where:{
                    pressID:press.id
                  }
                }
              )
            }
          }
    }
}