import { PaginationInterface } from './pagination.interface';

export interface GetOptions {
  pagination?: PaginationInterface;
  query?: string;
  removeDefaultFilters?:boolean
}
