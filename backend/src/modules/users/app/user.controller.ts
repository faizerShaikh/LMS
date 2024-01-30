import { Controller, Get, Param, Query } from '@nestjs/common';
import { Op } from 'sequelize';
import { GetUser } from 'src/core/decorators';
import { GenericController } from 'src/modules/generics/app/generics.controller';
import { CreateUserDto, UpdateDTO } from '../dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends GenericController {
  constructor(private readonly userService: UserService) {
    super(userService, {
      createDTO: CreateUserDto,
      updateDTO: UpdateDTO,
    });
  }

  @Get()
  getAllObj(
    @GetUser() user?: any,
    @Query('query') text?: string,
    @Query('me') me?: string,
  ) {
    let query = {};
    if (me === 'false') {
      query['id'] = { [Op.ne]: user.id };
    }

    if (text) {
      let condition = {
        [Op.iLike]: '%' + text + '%',
      };

      query = {
        [Op.or]: {
          name: condition,
        },
      };
    }
    return this.userService.findAll({ where: query });
  }

  @Get('me')
  getMe(@GetUser() user: any) {
    // if (this.requestParams.tenant.is_channel_partner) {
    //   return user;
    // }
    return this.userService.getMe(user.id);
  }

  @Get('group-by/:param')
  getGroupBy(@Param('param') param: string, @Query('query') query: string) {
    return this.userService.getGroupBy(param, query);
  }
}
