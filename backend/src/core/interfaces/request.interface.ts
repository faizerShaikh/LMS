import { Request } from 'express';
import { User } from 'src/modules/user/users/models/user.model';

export interface RequestInterface extends Request {
  user: User;
}
