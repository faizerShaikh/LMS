import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";
import { ApplicationForm } from "../applicationForm/application.model";
import { leadStatusEnum } from "./dto";
import { AbstractDataTypeConstructor } from "sequelize";

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

function IsUUID(arg0: number): (target: Leads, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function Default(UUIDV4: AbstractDataTypeConstructor): (target: Leads, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function PrimaryKey(target: Leads, propertyKey: "id"): void {
    throw new Error("Function not implemented.");
}
