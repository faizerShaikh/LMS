import { CreateUpdateDialogBaseProps } from "./base";

export interface WebinarInterface extends CreateUpdateDialogBaseProps  {
    
    id?: string;
    slug?: string;
    title?: string;
    coverImage?: string;
    description: string;
    agenda: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    metaID?: string;
}