import { BaseObjInterface } from "./base";

export interface Topics {
    topic: string,
    answer: string

}

export interface FaqInterface extends BaseObjInterface {
  qustion: string,
  faqTopic: Topics
}