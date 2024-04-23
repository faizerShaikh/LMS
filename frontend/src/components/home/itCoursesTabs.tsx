"use client";
import React from "react";
import { Tabs } from "..";
import { CourseSpecializationCard } from "components/layout/cards/CourseSpecializationCard";
import { Course } from "interfaces";
import { ItCoursesCard } from "./itCoursesCard";

export const ItCourseTabs = ({}: {}) => {
  return (
    <div>
      <Tabs
        tabs={[
          {
            id: 0,
            buttonLabel: "Data science ",
            component: <ItCoursesCard />,
          },
        ]}
      />
    </div>
  );
};
