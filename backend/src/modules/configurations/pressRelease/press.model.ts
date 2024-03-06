import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { type } from "../metaData/dto/type.enum";

@Table({
  tableName:'press-releases',
  paranoid:true,
  defaultScope:{
    order:[["updatedAt","ASC"]],
  }
})
export class Press extends MyBaseModel {
  override type= type.MEDIA;

  @Column
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column
  link: string;

  @Default('media/default.png')
  @Column
  coverImage: string;

  @Default(false)
  @Column
  isFeatured: boolean;
}
