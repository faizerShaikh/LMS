"use client";
import React from "react";
import { Tabs } from "..";
import { ItCoursesCard } from "./itCoursesCard";

export const ItCourseTabs = ({ CoursesData }: { CoursesData: [] }) => {
  // console.log(CoursesData, "<<<vdvdhvdhv");
  return (
    <div>
      <Tabs
        tabs={CoursesData.map((item: any, index: any) => ({
          id: index,
          buttonLabel: item.name,
          component: <ItCoursesCard item={item} />,
        }))}
      />
    </div>
  );
};
