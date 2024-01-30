import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { Op } from 'sequelize';
import { RequestParamsService } from 'src/core/modules';
import { GenericsService } from 'src/modules/generics/app/generics.service';
import { CreateUserDto } from '../dtos';
import { User } from '../models';
const ExcelJS = require('exceljs');

@Injectable()
export class UserService extends GenericsService {
  constructor(
    @InjectModel(User) private readonly user: typeof User,
    private readonly requestParams: RequestParamsService,
  ) {
    super(User, {
      include: [],
      requestParams,
      searchFields: [
        '"User"."name"',
        '"User"."email"',
        '"User"."region"',
        '"User"."contact"',
      ],
    });
  }

  async create(dto: CreateUserDto): Promise<any> {
    const user = await this.user.create({
      ...dto,
    });

    return user;
  }

  async getGroupBy(param: string, text?: string) {
    let query = {};
    if (text) {
      let condition = {
        [Op.iLike]: '%' + text + '%',
      };

      query = {
        [Op.or]: {
          '$"users"."name"$': condition,
          name: condition,
        },
      };
    }

    return this[param].findAll({
      where: {
        ...query,
      },
      attributes: ['id', 'name'],
      include: {
        model: User,
        required: true,
        attributes: ['name', 'id', 'email', 'contact', 'region'],
        include: [
          {
            model: User,
            attributes: ['name', 'id', 'email'],
          },
        ],
      },
    });
  }

  async getMe(id: string) {
    const user = await this.getOneObj(
      {
        where: { id },
      },
      true,
    );
    return user;
  }
}
