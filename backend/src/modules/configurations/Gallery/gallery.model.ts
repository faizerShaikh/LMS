import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PageContent } from "../PageContent/pageContent.model";

@Table({
    tableName:'galleries',
    paranoid:true
})
export class gallery extends Model{

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;

    @Column
    orderBy:number

    @Default('media/default.png')
    @Column
    coverImage:string

    @Column
    name:string

    @Column({type:DataType.TEXT})
    description:string

    
    @ForeignKey(()=>PageContent)
    pageId:string

    @BelongsTo(()=>PageContent)
    pageContent:PageContent

}