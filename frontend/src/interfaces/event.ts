import { BaseObjInterface } from "./base";

export interface EventInterface extends BaseObjInterface{
    id?: string,
    slug?: string,
    name?: string,
    description?: string,
    eventImage: string,
    startDayTime?: string,
    endDayTime?: string,
    deadLine?: string,
    eventType?: string,
    eventLocation?: string,
    isFeatured?: boolean,
}