import { BaseObjInterface, MetaDataInterface } from "./base";

export interface GalleryInterface extends BaseObjInterface {
  id?:string;
  slug?: string;
  coverImage?: string;
  name?: string;
  description?: string;
  orderBy ?: number;
  pageId?: string;
}

export interface PageContentInterface extends BaseObjInterface{
  id: string;
  slug: string;
  name: string;
  coverImage: string;
  title: string;
  titleDescription: string;
  pageDescription: string;
  gallery: GalleryInterface[];
  metaID?:string
  metaData?: MetaDataInterface;
}
