import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Webinar } from './webinar.model';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { Events } from '../../event.model';
import { MetaData } from 'src/modules/configurations/MetaData/meta.model';

@Injectable()
export class WebinarService extends GenericService<
  Webinar,
  CreateWebinarDto,
  UpdateWebinarDto
>({
  defaultFindOptions: {
    include: [Events],
  },
  includes: [Events],
}) {
  constructor(
    @InjectModel(Webinar) private webinar: typeof Webinar,
    private reqParams: RequestParamsService,
    @InjectModel(Events) private event: typeof Events,
  ) {
    super(webinar, reqParams);
  }

  getOneBySlug<Webinar extends {} = any>(slug?: string): Promise<Webinar> {
    return this.getOneObj<Webinar>(
      {
        where: {
          '$event.slug$': slug,
        },
      },
      true,
    );
  }

  async create<Webinar>(dto: CreateWebinarDto): Promise<Webinar> {
    console.log('======================>>>>>>>>.',dto.event)
    const webinar = await super.create(dto);
    await this.CreateEventObject(dto, webinar, true);
    return this.getOne(webinar.id);
  }

  async update<Webinar>(data: UpdateWebinarDto, id: string): Promise<Webinar> {
    const webinar = await super.update(data, id);
    await this.CreateEventObject(data, webinar, false);
    return this.getOne(webinar.id);
  }
  async updateSpeakersImage(files: Express.Multer.File[], id: string) {
    const webinar = await this.getOne<Webinar>(id);

    if (!webinar) {
      throw new InternalServerErrorException('Blog not found');
    }
    const updatedSpeakers = [...webinar.speakers];
    for (const [index, value] of Object.entries(webinar.speakers) as any) {
      const fileIndex = parseInt(index);

      const file = files.find((file) => {
        if (file.fieldname) {
          const match = file.fieldname.match(/\[(\d+)\]/);
          return match && parseInt(match[1]) === fileIndex;
        }
        return file;
      });
      console.log(file, 'file.......');

      if (file) {
        updatedSpeakers[index].image =
          typeof file === 'string'
            ? file
            : '/media/webinar/speaker/' + file.filename;
      }
    }
    webinar.speakers = updatedSpeakers;
    await webinar.save();
  }

  async CreateEventObject(
    dto: CreateWebinarDto | UpdateWebinarDto,
    webinar: Webinar,
    isNewRecord: boolean,
  ) {
    console.log('===============-=--=-=-=-=-=->>>',dto.event)
    if (isNewRecord) {
      await this.event.create({
        ...dto.event,
        webinarId: webinar.id,
      });
    } else {
      if (dto.event) {
        await this.event.update<Events>(
          { ...dto.event },
          {
            where: {
              webinarId: webinar.id,
            },
          },
        );
      }
    }
  }


  async webinars() {
    try {
      const webinars = await this.webinar.findAll<Webinar>({
        include: [
          {
            model: Events,
            include: [MetaData]
          }
        ],
      });
      return {  
        
          count: webinars.length,
          rows: webinars
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: 'An error occurred while fetching webinars',
        error: error.message
      };
    }
  }
  

}
