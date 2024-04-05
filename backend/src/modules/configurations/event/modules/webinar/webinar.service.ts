import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Webinar } from './webinar.model';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { Events } from '../../event.model';

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
    if (isNewRecord) {
      await this.event.create({
        ...dto,
        webinarId: webinar.id,
      });
    } else {
      if (dto) {
        await this.event.update<Events>(
          { ...dto },
          {
            where: {
              webinarId: webinar.id,
            },
          },
        );
      }
    }
  }
}
