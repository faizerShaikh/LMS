"use client";
import { Button } from "components/layout";
import { useDownloadFile } from "hooks";
import React from "react";

export const ExelExportRagistrationEnquries = ({ children, pageId }: any) => {
  const { refetch } = useDownloadFile(
    `/configurations/event-webinar/registration/export/${pageId}`
  );

  return <Button onClick={() => refetch()}>{children}</Button>;
};
