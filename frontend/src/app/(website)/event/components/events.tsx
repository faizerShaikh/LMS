"use client";
import { ButtonGroup } from "components/layout";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Button = {
  text: string;
  url: string;
  key: string;
  query: any;
};

type Props = {
  buttons: Button[];
  defaultValue?: string;
};

export const Events = ({ buttons, defaultValue }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (url: string, query: any = {}) => {
    if (router) {
      router.push(
        `${url}?${Object.keys(query)
          .map((key) => createQueryString(key, query[key]))
          .join("&")}`
      );
    }
  };

  return (
    <ButtonGroup
      defaultValue={defaultValue}
      buttons={buttons.map(({ text, url, key, query }) => ({
        text,
        clickHandler: () => handleClick(url, query),
        key,
      }))}
    />
  );
};
