"use client";
import React from "react";
import { Tabs } from "..";
import { CourseSpecializationCard } from "components/layout/cards/CourseSpecializationCard";
import { CourseSpecializationInterface } from "interfaces";

export const CourseTabs = ({
  cardsdata,
}: {
  cardsdata: CourseSpecializationInterface[];
}) => {
  //   console.log(cardsdata, "<cardsdatacardsdatacardsdata");
  return (
    <div>
      <Tabs
        tabs={[
          {
            id: 0,
            buttonLabel: "MBA(Master of Business Administration)",
            component: <CourseSpecializationCard data={cardsdata} />,
          },
          {
            id: 1,
            buttonLabel: "MCA(Master of Computer Applications)",
            component: <CourseSpecializationCard data={cardsdata} />,
          },
          {
            id: 2,
            buttonLabel: "M.Com(Master of Commerce)",
            component: <CourseSpecializationCard data={cardsdata} />,
          },
        ]}
      ></Tabs>
    </div>
  );
};
