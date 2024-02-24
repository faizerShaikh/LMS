import { Column, DataType, Default, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MetaData } from "../Meta Data/meta.model";

@Table({
  tableName:'press-releases'
})
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

    @Default(false)
    @Column
    isFeatured:boolean

    @HasOne(()=>MetaData)
    metaData:string
    
    
}