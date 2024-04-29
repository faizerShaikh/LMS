import { BaseObjInterface, MetaDataInterface } from "./base";

export interface Course {
  slug: string;
  id: string;
  name: string;
  description: string;
  course_image: string;
  course_level: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface UniversityInterface extends BaseObjInterface {
  slug: string;
  name: string;
  id: string;
  short_name: string;
  description: string;
  university_image: string;
  no_of_courses?: number;
  metaID?: string;
  metaData?: MetaDataInterface;
}

export interface CourseSpecializationInterface {
  slug: string;
  id: string;
  name: string;
  description: string;
  notes: string;
  syllabus: string;
  textarea?: string;
  eligibilty: string;
  delivery_mode: string;
  credits: number;
  internationalRegonization: boolean;
  learningPedagogy: string;
  learningPath: string;
  duration: string;
  medium_of_instructions: string;
  certificate_provided: boolean;
  cover_image: string;
  student_enrolled: number;
  is_published: boolean;
  webinar: boolean;
  university_id: string;
  course_id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  courses: number;
  course?: Course | null;
  university?: UniversityInterface;
  metaID?: string;
  metaData?: MetaDataInterface;
  fees_structure?: FeesStructureInterface;
  programHiglights?: ProgramHiglightsInterface[];
  association?: AssociationInterface[];
  admissionProcess?: AdmissionProcessInterface[];
  program_structures?: programmeStructure[];
  info?: InvestmentForLifeInterface;
  brouchure?:string
}

export interface FeesStructureInterface {
  id?: string;
  indian_semester_fees: number;
  indian_annual_fees: number;
  foreign_semester_fees: number;
  foreign_annual_fees: number;
  notes: string;
  course_specialization_id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface ProgramHiglightsInterface {
  id?: string;
  name: string;
  image: string;
  courseSpecialization?: CourseSpecializationInterface;
  course_specialization_id: string;
}

export interface AssociationInterface {
  id?: string;
  title: string;
  subTitle: string;
  image: string;
  course_specialization_id?: string;
  courseSpecialization?: CourseSpecializationInterface;
}

export interface AdmissionProcessInterface {
  id?: string;
  title: string;
  description: string;
  image: string;
  course_specialization_id?: string;
  courseSpecialization?: CourseSpecializationInterface;
}

export interface programmeStructure {
  id?: string;
  image: string;
  name: string;
  course_specialization_id?: string;
}

export interface InvestmentForLifeInterface {
  id?: string;
  title: string;
  description: string;
  image: string;
  course_specialization_id?: string;
  courseSpecialization?: CourseSpecializationInterface;
}
