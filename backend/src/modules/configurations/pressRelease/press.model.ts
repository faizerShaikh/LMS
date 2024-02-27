import { Column, DataType, Default, Table } from "sequelize-typescript";
import { BaseModel } from "src/core/modules/generics/base.model";
import { type } from "../metaData/dto/type.enum";

@Table({
  tableName:'press-releases'
})
export class Press extends BaseModel {
  override type= type.MEDIA;
  @Column
    title: string;

    @Column({
        type: DataType.TEXT,
    })
    description: string;

    @Column
    link: string;

    @Column
    coverImage: string;

    @Default(false)
    @Column
    isFeatured: string;

}
