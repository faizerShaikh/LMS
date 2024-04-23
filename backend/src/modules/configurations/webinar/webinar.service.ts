import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Webinar} from './webinar.model';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { Events } from '../event/event.model';
import { MetaData } from '../MetaData/meta.model';

@Injectable()
export class WebinarService extends GenericService<
  Webinar,
  CreateWebinarDto,
  UpdateWebinarDto
>({
  defaultFindOptions:{
    include:[Events,MetaData],
  },
  includes:[Events,MetaData]
}) {
  constructor(
    @InjectModel(Webinar) private webinar: typeof Webinar,
    private reqParams: RequestParamsService,
    @InjectModel(Events) private event: typeof Events,

  ) {
    super(webinar, reqParams);
  }

  async create<Webinar>(
    dto:CreateWebinarDto,
  ):Promise<Webinar>{
    const webinar=await super.create(dto)
    await this.CreateEventObject(dto,webinar,true)
    return
  }

  async update<Webinar>(
    data: UpdateWebinarDto,
    id:string
  ):Promise<Webinar>{
    const webinar = await super.update(data,id);
    await this.CreateEventObject(data,webinar,false)
    return webinar
  }
  async updateSpeakersImage(files:Express.Multer.File[],id:string){
    const  webinar=await this.getOne<Webinar>(id);
    if (!webinar) {
      throw new InternalServerErrorException("Blog not found");
    }
    const defaultImagePath='backend/src/public/media/Author.png'; 
    for (const [index,value] of Object.entries(webinar.speakers) as any){
      const fileIndex = parseInt(index);
      const file = files.find(file => {
        const match = file.fieldname.match(/\[(\d+)\]/);
        return match && parseInt(match[1])=== fileIndex
      })
      if (value.image != defaultImagePath) {
        if (file) {
          const updatedSpeakers = [...webinar.speakers];
          updatedSpeakers[index].image = '/media/webinar/Speaker/' + file.filename;
          webinar.speakers = updatedSpeakers;
        }
      }
    }
    await webinar.save()
  }

  async CreateEventObject(
    dto: CreateWebinarDto | UpdateWebinarDto,
    webinar:Webinar,
    isNewRecord:boolean
  ){
    if(!webinar.isNewRecord){
      await this.event.destroy({
        where:{
          webinarId:webinar.id
        }
      })
    }
    if(isNewRecord){
        await this.event.create({
          ...dto.event,
          webinarId: webinar.id
        })
    }
    else{
      if(dto.event){
        await this.event.update<Events>(
          {...dto.event},
          {
            where:{
              webinarId: webinar.id
            }
          }
        )
      }
    }
  }

}
