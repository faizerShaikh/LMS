"use client";
import { Button } from "components/layout";
import { useDownloadFile } from "hooks";
import React from "react";

export const ApplicationFormExelExport = ({ children }: any) => {
  const { refetch } = useDownloadFile(
    "/configurations/application-form/export"
  );
  return <Button onClick={() => refetch()}>{children}</Button>;
};
