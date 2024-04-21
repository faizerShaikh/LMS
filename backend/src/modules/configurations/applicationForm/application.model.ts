import { Model, Column, Table, PrimaryKey, DataType, Default, IsUUID } from "sequelize-typescript";

@Table({
    tableName: 'ApplicationForms', // Changed to camelCase
    paranoid: true
})
export class ApplicationForm extends Model<ApplicationForm> {

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;  

    @Column
    fullName: string;

    @Column
    mobileNumber: string;

    @Column
    emailID: string;

    @Column
    dateOfBirth: Date; // Changed to Date type

    @Column
    gender: string;

    @Column
    nationality: string;

    @Column
    governmentIDType: string;

    @Column
    country: string;

    @Column
    state: string;

    @Column
    city: string;

    @Column
    howDoYouKnowAboutRiseBack: string; 

    @Column
    universityName: string;

    @Column
    selectCourse: string;

    @Column
    specialization: string;
}
