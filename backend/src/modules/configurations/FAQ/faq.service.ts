import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Faq } from './faq.model';
import { CreateFaqDTO, UpdateFAQ } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { FaqTopic } from './FAQ Topics/faqTopic.model';
import { MetaData } from '../Meta Data/meta.model';
import { type } from '../Meta Data/dto/type.enum';

@Injectable()
export class FaqService extends GenericService<Faq, CreateFaqDTO, UpdateFAQ>({
  includes: [FaqTopic, MetaData],
}) {
  constructor(
    @InjectModel(Faq) private faq: typeof Faq,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData: typeof MetaData,
  ) {
    super(faq, reqParams);
  }

  async createOtherObject(
    dto: CreateFaqDTO | UpdateFAQ,
    faq: Faq,
    isNewRecord: boolean,
  ) {
    if (isNewRecord) {
      await this.metaData.create({
        ...dto.metaData,
        faqID: faq.id,
        type: type.FAQ,
      });
    } else {
      if (dto.metaData) {
        await this.metaData.update<MetaData>(
          { ...dto.metaData },
          {
            where: {
              faqID: faq.id,
            },
          },
        );
      }
    }
  }

  async create<FAQ>(dto: CreateFaqDTO): Promise<FAQ> {
    const faq = await super.create(dto);
    await this.createOtherObject(dto, faq, true);
    return faq;
  }

  async update<FAQ = any>(data: UpdateFAQ, id: string): Promise<FAQ> {
    const faq = await super.update(data, id);
    await this.createOtherObject(data, faq, false);
    return faq;
  }
}
