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
  textarea: string;
  eligibilty: string | null;
  delivery_mode: string | null;
  credits: number | null;
  internationalRegonization: boolean | null;
  learningPedagogy: string | null;
  learningPath: string | null;
  duration: string;
  medium_of_instructions: string | null;
  certificate_provided: boolean | null;
  cover_image: string;
  student_enrolled: number | null;
  is_published: boolean | null;
  webinar: boolean | null;
  university_id: string | null;
  course_id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  courses: number | null;
  course?: Course | null;
  university?: UniversityInterface | null;
  metaID?: string;
  metaData?: MetaDataInterface;
  fees_structure?: FeesStructureInterface | null;
  programHiglights?: ProgramHiglightsInterface[] | null;
  association?: AssociationInterface[] | null;
  admissionProcess?: AdmissionProcessInterface[] | null;
  program_structures?: programmeStructure[] | null;
  info?: InvestmentForLifeInterface;
  brouchure?: string | null;
  days?: string;
  shortInfo?: string;
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
