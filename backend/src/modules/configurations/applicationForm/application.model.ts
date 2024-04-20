import { Model, Column, Table } from "sequelize-typescript";

@Table({
    tableName: 'ApplicationForms', // Changed to camelCase
    paranoid: true
})
export class ApplicationForm extends Model<ApplicationForm> {

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
