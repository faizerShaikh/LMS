import { BaseObjInterface } from "./base";

export interface EnquiriesPageInterface extends BaseObjInterface {
    name: string;
    organization: string;
    title: string;
    email: string;
    type: string;
    status: string;
    from: string;
    note :string
}