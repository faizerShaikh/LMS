"use client";
import React from "react";
import { Tabs } from "components/layout";
import CourseSpecializationForm from "./CourseSpetalizationForm";
import {
  Course,
  CourseSpecializationInterface,
  UniversityInterface,
} from "interfaces";
import FeesForm from "./FeesForm";

type Props = {
  initialValues: CourseSpecializationInterface;
  courseData: Course[];
  isUpdate: boolean;
  slug: string;
  universityData: UniversityInterface[];
};

const CourseSpetalizationContentForm = ({
  initialValues,
  courseData,
  isUpdate,
  slug,
  universityData,
}: Props) => {
  return (
    <>
      <div className="mb-2">
        {isUpdate ? (
          <Tabs
            tabs={[
              {
                id: 0,
                buttonLabel: "Course Spetalization Form",
                component: (
                  <CourseSpecializationForm
                    courseData={courseData}
                    initialValues={initialValues}
                    isUpdate={isUpdate}
                    slug={slug}
                    universityData={universityData}
                  />
                ),
              },
              {
                id: 1,
                buttonLabel: "Fees",
                component: <FeesForm id={initialValues.id} />,
              },
            ]}
          />
        ) : (
          <CourseSpecializationForm
            courseData={courseData}
            initialValues={initialValues}
            isUpdate={isUpdate}
            slug={slug}
            universityData={universityData}
          />
        )}
      </div>
    </>
  );
};

export default CourseSpetalizationContentForm;
