"use client";
import { PageHeader } from "components/layout/pageHeader";
import React from "react";
import { CustomCourseInterface } from "interfaces";
import CustomCourseSpecializationForm from "../component/CustomCourseForm";
import { GetCourse, getSingleCustomCourse } from "lib";

type Props = {
  params: { slug: string };
};

const SingleGlobalPartner = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: CustomCourseInterface = {
    id: "",
    slug: "",
    name: "",
    description: "",
    duration: "",
    course_id: "",
    cover_image: "",
    days: "",
    syllabus: "",
    shortInfo: "",
    notes: "",
    textarea: "",
    fees: 0,
  };

  let data: CustomCourseInterface | null = null;
  if (isUpdate) {
    data = await getSingleCustomCourse(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
    }
  }
  const courseData = await GetCourse();

  return (
    <>
      <PageHeader title={"Add Global Partner"} className="mb-2"></PageHeader>
      <CustomCourseSpecializationForm
        initialValues={initialValues}
        isUpdate={isUpdate}
        slug={slug}
        id={data?.id}
        courseData={courseData?.rows}
      />
    </>
  );
};

export default SingleGlobalPartner;
