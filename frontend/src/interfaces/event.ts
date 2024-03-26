import { BaseObjInterface, MetaDataInterface } from "./base";

export interface EventInterface extends BaseObjInterface {
  id?: string;
  slug?: string;
  name?: string;
  description: string;
  eventImage: string;
  startDayTime?: string;
  endDayTime?: string;
  deadLine?: string;
  eventType?: string;
  eventLocation?: string;
  isFeatured?: boolean;
  metaData?: MetaDataInterface;
  metaId?: string;
  eventFeatures?: CommonContentEventInterface[];
  applicationProcess?: CommonContentEventInterface[];
  selectionProcess?: CommonContentEventInterface[];
  winners?: CommonContentEventInterface[];
  stratigicPartners?: stratigicPartnersInterface[];
}

export interface CommonContentEventInterface extends BaseObjInterface {
  slug?: string;
  id: string;
  title: string;
  desription: string;
  image: string;
  order: number;
  type?: string;
  eventId?: string;
}

export interface stratigicPartnersInterface extends BaseObjInterface {
  stratigicPartners?: string;
}
