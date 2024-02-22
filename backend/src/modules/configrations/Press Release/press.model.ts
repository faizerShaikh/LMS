import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Press extends Model{


    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id: string;
    
    @Column
    title:string

    @Column({
        type: DataType.TEXT,
      })
    description:string

    @Column
    link:string

    @Column
    coverImage:string

    @Column
    isFeatured:string

}