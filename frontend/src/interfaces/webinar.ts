import { CreateUpdateDialogBaseProps, MetaDataInterface } from "./base";

export interface WebinarInterface extends CreateUpdateDialogBaseProps {
  id?: string;
  speakers: { name: string; bio: string; image: string }[];
  slug?: string;
  title?: string;
  coverImage?: string;
  description: string;
  agenda: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  metaID?: string;
  metaData?: MetaDataInterface;
}

export interface WebinarResponseInterface extends CreateUpdateDialogBaseProps {
  id?: string;
  agenda: string;
  title?: string;
  event?: {
    name?: string;
    coverImage?: string;
    description?: string;
    metaID?: string;
    slug?: string;
  };
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  metaData?: MetaDataInterface;
}
