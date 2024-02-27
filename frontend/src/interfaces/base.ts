import { NextComponentType, NextPageContext } from "next";

export interface BaseObjInterface {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type BaseProps<T, U extends {} = {}> = NextComponentType<
  NextPageContext,
  {
    data: T;
  } & U,
  {
    data: T;
  } & U
>;

export interface CreateUpdateDialogBaseProps {
  isUpdate?: boolean;
  data?: any;
}

export interface FKBaseInterface {
  id?: string;
  name?: string;
  title?: string;
}

export interface ActionInterface {
  payload: any;
  type: string;
}


export interface MetaDataInterface {
  slug: string;
  keywords: string;
  title: string;
  description: string;
  subject: string;
  copyright: string;
  summary: string;
  classification: string;
  author: string;
  owner: string;
  url: string;
  pageName: string;
  category: string;
  subtitle: string;
  replyTo: string;
  type: string;
}