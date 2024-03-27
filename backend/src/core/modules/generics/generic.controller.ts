import {
  BadRequestException,
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { methodOptions } from './types';

import { ServiceInterface } from './interface';

interface GenericControllerOptions {
  notAllowedMethods?: methodOptions[];
  createObjDTO: any;
  updateObjDTO: any;
}

export function GenericController<Model, CreateObjDTO, UpdateObjDTO>({
  createObjDTO,
  updateObjDTO,
  notAllowedMethods = [],
}: GenericControllerOptions) {
  class GenericClass {
    constructor(
      protected readonly service: ServiceInterface<
        Model,
        CreateObjDTO,
        UpdateObjDTO
      >,
    ) {}
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createObj(@Body() body: any) {
      this.validateMethod(methodOptions.create);

      const obj = await this.validateData(body, createObjDTO);
      return this.service?.create(obj || body);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllObj() {
      this.validateMethod(methodOptions.getAll);
      return this.service?.getAll({});
    }

    @Post('/seed')
    @HttpCode(HttpStatus.CREATED)
    async seedData() {
      this.validateMethod(methodOptions.seedData);
      return this.service?.seedData();
    }

    @Get('slug/:slug')
    @HttpCode(HttpStatus.OK)
    async getOneBySlug(@Param('slug') slug: string) {
      this.validateMethod(methodOptions.getOneByslug);
      return this.service?.getOneBySlug(slug);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOneObj(@Param('id') id: string) {
      this.validateMethod(methodOptions.getOne);

      return this.service?.getOne(id);
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    async updateObj(@Body() body: any, @Param('id') id: string) {
      this.validateMethod(methodOptions.update);
      const obj = await this.validateData(body, updateObjDTO);
      return this.service?.update(obj || body, id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteObj(@Param('id') id: string) {
      this.validateMethod(methodOptions.delete);

      return this.service?.delete(id);
    }

    private validateMethod(name: methodOptions) {
      if (notAllowedMethods.includes(name)) throw new NotFoundException();
    }

    private async validateData(body: any, dto: any): Promise<any> {
      let obj;
      console.log(body, dto);
      if (dto) {
        obj = plainToClass(dto, body) as typeof dto;

        const errors = await validate(obj, { whitelist: true });
        let message = [];
        if (errors.length) {
          errors.forEach((err) => {
            message = [...message, ...Object.values(err.constraints)];
          });
          throw new BadRequestException(message);
        }
        return obj;
      }
      return null;
    }
  }

  return GenericClass;
}
