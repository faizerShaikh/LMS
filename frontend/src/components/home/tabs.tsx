"use client";
import React from "react";
import { Tabs } from "..";
import { CourseSpecializationCard } from "components/layout/cards/CourseSpecializationCard";

export const CourseTabs = ({ CoursesData }: { CoursesData: [] }) => {
  return (
    <div>
      <Tabs
        tabs={CoursesData.map((item: any, index: any) => ({
          id: index,
          buttonLabel: item.name,
          component: <CourseSpecializationCard item={item} />,
        }))}
      />
    </div>
  );
};
