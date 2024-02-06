import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { RequestInterface } from '../../interfaces/request.interface';
import { User } from 'src/modules/user/users/models/user.model';

@Injectable({ scope: Scope.REQUEST })
export class RequestParamsService {
  user: User;
  query: any;
  is_apsis_user: boolean = false;
  pagination: {
    limit?: number;
    offset?: number;
  };

  constructor(@Inject(REQUEST) private readonly request: RequestInterface) {
    this.user = this.request.user;
    this.query = this.request.query.search;
    this.pagination = this.getPagination(this.request.query);
  }

  getPagination = (query: any) => {
    let pagination = {};
    if (!(query.limit && query.page)) {
      return pagination;
    }
    query.limit = parseInt(query.limit, 10) || 2;
    query.page = parseInt(query.page, 10) + 1 || 1;
    query.offset = query.limit * (query.page - 1);
    pagination = {
      limit: query.limit || 2,
      offset: query.limit * (query.page - 1),
    };

    return pagination;
  };

  getUser() {
    return this.request.user;
  }
}
