import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Events } from "./event.model";
import { InjectModel } from "@nestjs/sequelize";
import { unlink } from "fs";
import { join } from "path";
import { CreateEventDTO, UpdateEventDTO } from "./dtos";
import { User } from "src/modules/user/users/models/user.model";
@Injectable()
export class eventService extends GenericService<Events,CreateEventDTO,UpdateEventDTO>({
    
}){
    constructor(
      @InjectModel (Events) private event : typeof Events,
      private reqParams:RequestParamsService
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
}