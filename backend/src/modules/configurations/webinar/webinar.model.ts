import { Column, DataType, Default, HasMany, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { EventRegistration } from "../event/eventRegistration/eventRegistration.model";

@Table({
    tableName:'webinars',
    paranoid:true
})
export class Webinar extends MyBaseModel{
    @Column
    title :string

    @Default('/media/default.png')
    @Column
    coverImage:string

    @Column({
        type: 'TEXT',
        get() {
            const value = this.getDataValue('speakers');
            return value ? value.split(';') : [];
        },
        set(value: string[]) {
            this.setDataValue('speakers', value.join(';'));
        }
    })
    speakers: string[];

    @Column({
        type:DataType.TEXT
    })
    description: string
   
    @Column({
        type:DataType.TEXT
    })
    agenda:string
    
    @HasMany(()=>EventRegistration)
    registrations:EventRegistration
}