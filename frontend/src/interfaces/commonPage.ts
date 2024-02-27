import { BaseObjInterface, MetaDataInterface } from "./base";

export interface GalleryInterface extends BaseObjInterface {
  coverImage: string;
  name: string;
  description: string;
  pageId: string;
}

export interface PageContentInterface extends BaseObjInterface{
  name: string;
  coverImage: string | null;
  title: string;
  titleDescription: string;
  pageDescription: string;
  gallery: GalleryInterface[];
  metaID?:string
  metaData?: MetaDataInterface;
}
