"use client";

import { ButtonGroup } from "components/layout";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export const Events = (props: Props) => {
  const router = useRouter();

  const handleClick = (key: string) => {
    router.push(`/event?key=${key}`);
  };
  const buttons = [
    {
      text: "Upcoming Events",
      key: "upcoming",
      clickHandler: () => {
        handleClick("upcoming");
      },
    },
    {
      text: "Past Events",
      key: "past",
      clickHandler: () => {
        handleClick("past");
      },
    },
  ];

  return <ButtonGroup buttons={buttons} />;
};
