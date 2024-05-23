import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";
import { ApplicationForm } from "../applicationForm/application.model";
import { leadStatusEnum } from "./dto";

@Table({
    paranoid:true,
    tableName:'leads'
})
export class Leads extends Model {

    @Column({
        type: DataType.STRING
    })
    leadStatus:leadStatusEnum

    @ForeignKey(()=>User)
    @Column
    assignedTo : string

    @ForeignKey(()=>ApplicationForm)
    @Column
    applicationId : string

    @BelongsTo(()=>ApplicationForm)
    applicationForm : ApplicationForm

}