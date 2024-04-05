import { NotFoundException } from '@nestjs/common';
import {
  FindAndCountOptions,
  FindOptions,
  Includeable,
  OrderItem,
  WhereOptions,
} from 'sequelize';
import { getSearchObject } from 'src/core/helpers';
import { RequestParamsService } from 'src/core/modules';

export function GenericService<
  Model,
  CreateObjDTO = any,
  UpdateObjDTO = any,
>(defaultOptions: {
  includes?: Includeable | Includeable[];
  defaultFindOptions?: FindAndCountOptions;
  searchFields?: string[];
  seedData?: any[];
}) {
  return class {
    options = defaultOptions;
    constructor(
      protected model: any,
      protected reqParam?: RequestParamsService,
    ) {}

    getOrder(): any {
      return [
        {
          $sort: {
            createdAt: -1,
          },
        },
      ];
    }

    //create an object in database
    async create<Model extends {} = any>(dto: CreateObjDTO): Promise<Model> {
      const data = await this.model.create(dto);
      return data;
    }

    //update an object in database
    async update<Model extends {} = any>(
      data: UpdateObjDTO,
      id: string,
    ): Promise<Model> {
      const obj = await this.getOneObj<Model>(id);
      await obj.update({
        ...data,
      });

      return obj;
    }

    // findAll records for matching query
    async getAll<Model extends {} = any>(
      findOptions: FindAndCountOptions = {},
      orderBy: OrderItem[] = [],
    ): Promise<Model[]> {
      let where = {
        ...(defaultOptions.defaultFindOptions &&
        defaultOptions.defaultFindOptions
          ? defaultOptions.defaultFindOptions.where
          : {}),
        ...(findOptions && findOptions.where ? findOptions.where : {}),
      };

      if (this.reqParam.query) {
        where = {
          ...where,
          ...getSearchObject(this.reqParam.query, defaultOptions.searchFields),
        };
      }

      let options: FindAndCountOptions = {
        ...defaultOptions.defaultFindOptions,
        ...findOptions,
        ...this.reqParam.pagination,
        include: defaultOptions.includes,
        subQuery: false,
        distinct: true,
        where,
      };

      const data = await this.model.findAndCountAll(options);

      return data;
    }
    async getOneBySlug<Model extends {} = any>(slug?: string): Promise<Model> {
      const data = await this.getobjslug<Model>(slug, true);
      return data;
    }

    async getobjslug<M = any>(slug: string, isJoin: boolean): Promise<M> {
      const where = { slug };
      return await this.getOneObj<M>({ where }, isJoin);
    }
    /// find one record for matching query
    async getOne<Model extends {} = any>(id?: string): Promise<Model> {
      const data = await this.getOneObj<Model>(id, true);
      return data;
    }

    //delete records for matching query
    async delete(id?: string): Promise<boolean> {
      const obj = await this.getOneObj(id);

      await obj.destroy();

      return true;
    }

    async getOneObj<M = any>(
      options?: string | FindOptions,
      isJoin: boolean = false,
    ): Promise<M | any> {
      let findOptions: any = {};
      if (typeof options === 'string') {
        findOptions = {
          ...defaultOptions.defaultFindOptions,
          where: {
            ...(defaultOptions.defaultFindOptions
              ? defaultOptions.defaultFindOptions.where || {}
              : {}),
            id: options,
          },
        };
      } else {
        findOptions = {
          where: {
            ...(defaultOptions.defaultFindOptions
              ? defaultOptions.defaultFindOptions.where || {}
              : {}),
            ...options.where,
          },
          ...options,
        };
      }

      const obj = await this.model.findOne({
        ...findOptions,
        include: isJoin ? defaultOptions.includes : [],
      });
      if (!obj) {
        throw new NotFoundException(`${this.model.name} not found!`);
      }
      return obj;
    }

    async seedData() {
      if (defaultOptions.seedData) {
        await this.model.bulkCreate(defaultOptions.seedData);
      }

      return 'Migration completed';
    }
  };
}
