import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";

@Table({
  tableName:'press-releases'
})
export class Press extends MyBaseModel {
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
