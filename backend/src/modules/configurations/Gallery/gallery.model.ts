import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PageContent } from "../PageContent/pageContent.model";
import { MyBaseModel } from "src/core/base.model";
import { type } from "../metaData/dto/type.enum";

@Table({
    tableName:'galleries',
    paranoid:true
})
export class gallery extends MyBaseModel{

    override type=type.GALLERY

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