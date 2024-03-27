import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { MetaData } from './meta.model';
import { MetaDataDto, UpdateMetaDataDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MetaDataService extends GenericService<
  MetaData,
  MetaDataDto,
  UpdateMetaDataDTO
>({}) {
  constructor(
    @InjectModel(MetaData) private metaData: typeof MetaData,
    private reqParams: RequestParamsService,
  ) {
    super(metaData, reqParams);
  }
  generateSlug(text: string): string {
    if (text)
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
  }

  async update<MetaData extends {} = any>(
    data: UpdateMetaDataDTO,
    id: string,
  ): Promise<MetaData> {
    const obj = await this.getOneObj<MetaData>(id);
    data.slug = this.generateSlug(data.slug);
    await obj.update(data);
    return obj;
  }
}
