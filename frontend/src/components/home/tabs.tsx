"use client";
import React from "react";
import { Tabs } from "..";
import { CourseSpecializationCard } from "components/layout/cards/CourseSpecializationCard";
import { Course } from "interfaces";

export const CourseTabs = ({
  CoursesCatagoriData,
}: {
  CoursesCatagoriData: Course[];
}) => {
  return (
    <div>
      <Tabs
        tabs={CoursesCatagoriData.map((item, index) => ({
          id: index,
          buttonLabel: item.name,
          component: <CourseSpecializationCard item={item} />,
        }))}
      />
    </div>
  );
};
