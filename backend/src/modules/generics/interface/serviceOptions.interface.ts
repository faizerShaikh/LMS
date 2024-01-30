import { Includeable, WhereOptions } from 'sequelize';
import { RequestParamsService } from 'src/core/modules';

export interface ServiceOptions {
  include?: Includeable | Includeable[];
  isSoftDelete?: boolean;
  defaultWhere?: WhereOptions;
  requestParams?: RequestParamsService;
  searchFields?: Array<string>;
}
