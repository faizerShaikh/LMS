import { BaseObjInterface } from "./base";

export interface BlogCategory  extends BaseObjInterface{
  slug?: string;
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    role?: string;
    createdAt?: string;
    updatedAt?:string;
    deletedAt?: string | null
  }