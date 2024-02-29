export enum MulterEnum {
  single,
  multiple,
  any
}

export interface MulterOptions {
  type: MulterEnum;
  fieldName?: string;
  maxFiles?: number;
  addDateTime?: boolean;
  path: string;
}
