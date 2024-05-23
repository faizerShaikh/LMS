import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './dtos';
import { GenericController } from 'src/core/modules';

@Controller('user')
export class UsersController extends GenericController<
  User,
  CreateUserDTO,
  UpdateUserDTO
>({
  createObjDTO: CreateUserDTO,
  updateObjDTO: UpdateUserDTO,
}) {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Get('Sales-Team')
<<<<<<< HEAD
  getBySalesTeam() {
    return this.usersService.getSalesTeam();
=======
  getBySalesTeam(){
    return this.usersService.getSalesTeam()
>>>>>>> fa6865585cd3505fafa1b8b6d8f8ef1e739d9243
  }
}
