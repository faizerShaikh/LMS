import { BaseObjInterface, MetaDataInterface } from "./base";

export interface MediaPressReleaseInterface extends BaseObjInterface {
    title: string;
    description: string;
    link: string;
    coverImage?: string;
    isFeatured: boolean;
    metaData: MetaDataInterface;
}