import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { status, type } from "./dto/enquiry.enum";

@Table({
    tableName:'enquiries'
})
export class Enquiry extends Model{
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id: string;

    @Column
    name: string;

    @Column
    organization: string;

    @Column
    title: string;

    @Column
    email: string;

    @Column
    type: type;

    @Column
    status: status;

}