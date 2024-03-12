import { BaseObjInterface, MetaDataInterface } from "./base";

export interface Course {
    id: string;
    name: string;
    description: string;
    course_image: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null
}

export interface UniversityInterface extends BaseObjInterface {
    slug: string;
    name: string;
    short_name: string;
    description: string;
    university_image: string | null;
    no_of_courses?: number;
    metaID?:string
    metaData?: MetaDataInterface;
}

export interface CourseSpecializationInterface {
    slug: string;
    id: string;
    name: string;
    description: string;
    eligibilty: string;
    delivery_mode: string;
    credits: number;
    is_internationally_recognised: boolean;
    learning_pedagogy: string;
    duration: string;
    medium_of_instructions: string;
    certificate_provided: boolean;
    cover_image: string | null;
    students_enrolled: number;
    is_published: boolean;
    university_id: string;
    course_id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    course: Course;
}