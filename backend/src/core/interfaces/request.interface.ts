import { Request } from 'express';
import { Transaction } from 'sequelize';
import { User } from 'src/modules/users/models';

export interface RequestInterface extends Request {
  user?: User;
  transaction?: Transaction;
}
