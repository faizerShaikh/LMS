import { PageHeader } from "components/layout/pageHeader";
import { CourseSpecializationInterface } from "interfaces/course";
import { GetCourse, GetUniversity, getSingleCourse } from "lib";
import React from "react";
import CourseSpetalizationContentForm from "../components/CourseSpetalizationContentForm";

type Props = {
  params: { slug: string };
};

const SingleCourseSpecialization = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: CourseSpecializationInterface = {
    slug: "",
    id: "",
    name: "",
    notes: "",
    textarea: "",
    description: "",
    eligibilty: "",
    delivery_mode: "",
    credits: 0,
    internationalRegonization: false,
    learningPedagogy: "",
    learningPath: "",
    duration: "",
    medium_of_instructions: "",
    certificate_provided: true,
    student_enrolled: 0,
    is_published: true,
    university_id: "",
    course_id: "",
    webinar: false,
    courses: 0,
  };
  const courseData = await GetCourse();

  let universityData = await GetUniversity();
  let data: CourseSpecializationInterface | null = null;
  if (isUpdate) {
    data = await getSingleCourse(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
    }
  }
  console.log(data, "<<<<<<<<<<<<<<<<<data");
  return (
    <>
      <PageHeader title="Add Course Specialization" />
      <CourseSpetalizationContentForm
        courseData={courseData?.rows}
        initialValues={initialValues}
        isUpdate={isUpdate}
        slug={slug}
        universityData={universityData?.rows}
      />
    </>
  );
};
export default SingleCourseSpecialization;
