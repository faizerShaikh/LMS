import { BaseObjInterface } from "./base";

export interface Topics extends BaseObjInterface{
    topic: string;
    answer: string;
faqId: string;
}

export interface FaqInterface extends BaseObjInterface {
  qustion: string,
  orderBy : number,
  isFeatured : boolean,
  faqTopic: Topics
}