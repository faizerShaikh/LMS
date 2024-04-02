import { PageHeader } from "components/layout";
import { CourseSpecializationInterface } from "interfaces";
import { getSingleCourse } from "lib";
import React from "react";
import CourseSpetalizationForm from "../components/CourseSpetalizationForm";
import CourseSpecializationForm from "../components/CourseSpetalizationForm";

type Props = {
  params: { slug: string };
};

const SingleCourseSpecialization = async ({ params: { slug } }: Props) => {
  //   const isUpdate = slug !== "add";
  //   let initialValues: CourseSpecializationInterface = {};
  //   let data: CourseSpecializationInterface | null = null;
  //   if (isUpdate) {
  //     data = await getSingleCourse(slug);
  //     if (data) {
  //       initialValues = { ...initialValues, ...data };
  //     }
  //   }
  return (
    <>
      <PageHeader title="Add Course Spetalization" />
      <CourseSpecializationForm />
    </>
  );
};
