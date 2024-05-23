import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";
import { ApplicationForm } from "../applicationForm/application.model";
import { leadStatusEnum } from "./dto";

@Table({
    paranoid:true,
    tableName:'leads'
})
export class Leads extends Model {
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;
                
    @Column({
        type: DataType.STRING,
        defaultValue:"new"
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