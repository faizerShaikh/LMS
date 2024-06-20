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
  getBySalesTeam() {
    return this.usersService.getSalesTeam();
  }

  
  @Get('Faculty')
  getByFacultuy() {
    return this.usersService.getFaculty();
  } 

  @Get('finance')
  getByFinance() {
    return this.usersService.getFinance();
  } 

  @Get()
  getUsers(){
    return this.usersService.getUsers();
  }
}
