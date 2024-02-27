import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Faq } from './faq.model';
import { CreateFaqDTO, UpdateFAQ } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { FaqTopic } from './faqTopic/faqTopic.model';
import { MetaData } from '../metaData/meta.model';

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

}
