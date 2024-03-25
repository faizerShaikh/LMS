"use client";
import { ButtonGroup } from "components/layout";
import { useRouter } from "next/navigation";
import React from "react";

type Button = {
  text: string;
  url: string;
  key: string;
};

type Props = {
  buttons: Button[];
};

export const Events = ({ buttons }: Props) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    console.log(url);

    if (router) {
      router.push(url);
    }
  };

  return (
    <ButtonGroup
      buttons={buttons.map(({ text, url, key }) => ({
        text,
        clickHandler: () => handleClick(url),
        key,
      }))}
    />
  );
};
