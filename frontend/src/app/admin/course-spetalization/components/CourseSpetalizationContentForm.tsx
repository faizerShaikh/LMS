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
import PageProgramingHighlights from "./pageProgramingHighlights";
import PageAssociation from "./PageAssociation";
import PageAdmissionProcess from "./PageAdmissionProcess";
import PageProgrammeStructure from "./PageProgrammeStructure";

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
                component: (
                  <FeesForm
                    data={initialValues.fees_structure}
                    id={initialValues.id}
                  />
                ),
              },
              {
                id: 2,
                buttonLabel: "Programme Structure",
                component: <PageProgrammeStructure pageId={initialValues.id} />,
              },
              {
                id: 3,
                buttonLabel: "Programing Highlights",
                component: (
                  <PageProgramingHighlights pageId={initialValues.id} />
                ),
              },
              {
                id: 4,
                buttonLabel: "Association",
                component: <PageAssociation pageId={initialValues.id} />,
              },
              {
                id: 5,
                buttonLabel: "Admission Process",
                component: <PageAdmissionProcess pageId={initialValues.id} />,
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
