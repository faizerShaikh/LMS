import { BaseObjInterface, MetaDataInterface } from "./base";

export interface GlobalPartnerInterface extends BaseObjInterface {
  slug?: string;
  id: string;
  name: string;
  coverImage: string;
  description: string;
  vision: string;
  objective: string;
  popular_course?: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  metaData?: MetaDataInterface;
  metaId?: string;
}
