import { BaseObjInterface } from "./base";

export interface UsersInterface extends BaseObjInterface {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  contactNumber?: number;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface SalesTeamInterface extends BaseObjInterface {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  contactNumber?: number;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
