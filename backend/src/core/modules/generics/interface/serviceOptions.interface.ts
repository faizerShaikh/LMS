import { FindAndCountOptions } from 'sequelize';

export interface ServiceInterface<Model, CreateObj, UpdateObjDTO> {
  create: (obj: CreateObj) => Promise<Model>;
  update: (obj: UpdateObjDTO, id: string) => Promise<Model>;
  delete: (id: string) => Promise<boolean>;
  seedData: () => Promise<string>;
  getAll: (
    findOptions: FindAndCountOptions,
  ) => Promise<{ data: Model[]; count: number } | Model[]>;
  getOne: (id: string) => Promise<Model>;
  getOneBySlug: (slug: string) => Promise<Model>;
}
