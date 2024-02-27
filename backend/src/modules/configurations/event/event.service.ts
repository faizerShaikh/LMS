import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Events } from "./event.model";
import { InjectModel } from "@nestjs/sequelize";
import { unlink } from "fs";
import { join } from "path";
import { CreateEventDTO, UpdateEventDTO } from "./dtos";
import { User } from "src/modules/user/users/models/user.model";
import { MetaData } from "../metaData/meta.model";
import { type } from "../metaData/dto/type.enum";
@Injectable()
export class eventService extends GenericService<Events,CreateEventDTO,UpdateEventDTO>({
    includes:[MetaData]
}){
    constructor(
      @InjectModel (Events) private event : typeof Events,
      private reqParams:RequestParamsService,
      @InjectModel(MetaData)
      private metaData: typeof MetaData
    ){
        super(event,reqParams)
    }

    async updateEventImage(file: Express.Multer.File, id:string){
        const event= await this.getOne<Events>(id)

        if(event.eventImage){
            unlink(
                join(
                    __dirname,
                    '../../../../', '/src/public/'+event.eventImage
                ),
                (err)=>{
                    if(err){
                        throw new InternalServerErrorException(err)
                    }
                    console.log('file deleted...')
                },
            )
        }

        await event.update({
            eventImage:'/media/event/'+file.filename
        })
        return 'Event Iamge Uploaded Successfully'
    }

    async create<Events>(dto: CreateEventDTO,): Promise<Events> {
        const event = await super.create(dto)
        await this.createOtherObjects(dto,event,true);
        return event
      }
    
      async createOtherObjects(
        dto: CreateEventDTO|UpdateEventDTO,
        event:Events,
        isNewRecord:boolean
      ){
        if(isNewRecord){
          await this.metaData.create({
            ...dto.metaData,
            eventID:event.id,
            type:type.EVENT
          })
        }
        else {
          if(dto.metaData){
            await this.metaData.update<MetaData>(
              {...dto.metaData},
              {
                where:{
                  eventID:event.id
                }
              }
            )
          }
        }
      }
      
      async update<Events>(data: UpdateEventDTO, id: string): Promise<Events> {
        try{
          
        const event= await super.update(data,id) ;
        await this.createOtherObjects(data,event,false);
        return event
        } catch (err){
          console.error("Error occurred in update method",err)
        } }

}