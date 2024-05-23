import { BaseObjInterface } from "./base";

export interface ApplicaationFormInterface extends BaseObjInterface {
  fullName: string;
  mobileNumber: string;
  emailID: string;
  gender: string;
  nationality: string;
  governmentIDType: string;
  country: string;
  state: string;
  city: string;
  howDoYouKnowAboutRiseBack: string;
  universityName: string;
  selectCourse: string;
  specialization: string;
  updatedAt: string;
  createdAt: string;
  dateOfBirth: string;
}

export interface LeadsInterface extends BaseObjInterface {
  id: string;
  leadStatus: string;
  assignedTo: string;
  applicationId: string;
  applicationForm: {
    id: string;
    fullName: string;
    mobileNumber: string;
    emailID: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    governmentIDType: string;
    country: string;
    state: string;
    city: string;
    howDoYouKnowAboutRiseBack: string;
    university_id: string;
    course_id: string;
    specialization_id: string;
    srNo: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
}
