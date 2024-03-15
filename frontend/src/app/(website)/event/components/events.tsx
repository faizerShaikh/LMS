'use client'
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
    router.push(url);
  };

  const handleButtonClick = (url: string) => {
    handleClick(url);
  };

  return (
    <ButtonGroup
      buttons={buttons.map(({ text, url, key }) => ({
        text,
        clickHandler: () => handleButtonClick(url),
        key, 
      }))}
    />
  );
};
