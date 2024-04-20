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
