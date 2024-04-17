"use client";
import { Button } from "components/layout";
import { useDownloadFile } from "hooks";
import React from "react";

export const ExelExport = ({ children }: any) => {
  const { refetch } = useDownloadFile("configurations/enquiry/export-enquiry");
  return <Button onClick={() => refetch()}>{children}</Button>;
};
