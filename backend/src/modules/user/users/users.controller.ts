import { Controller } from '@nestjs/common';
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
}
