import { BaseObjInterface, MetaDataInterface } from "./base";

export interface MediaPressReleaseInterface extends BaseObjInterface {
    slug?: string;
    title: string;
    description: string;
    link: string;
    coverImage?: string;
    isFeatured: boolean;
    metaID?:string
    metaData?: MetaDataInterface;
}