"use client";
import { PageHeader } from "components/layout/pageHeader";
import React from "react";
import { GlobalPartnerInterface } from "interfaces/globalPartner";
import { getSingleGlobalPartner } from "lib";
import GlobalPartnerForm from "../components/GlobalPartnerForm";

type Props = {
  params: { slug: string };
};

const SingleGlobalPartner = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: GlobalPartnerInterface = {
    slug: "",
    id: "",
    name: "",
    coverImage: "",
    description: "",
    vision: "",
    objective: "",
    popular_course: "",
    address: "",
    phone: "",
    website: "",
    email: "",
  };

  let data: GlobalPartnerInterface | null = null;
  if (isUpdate) {
    data = await getSingleGlobalPartner(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
    }
  }
  return (
    <>
      <PageHeader title={"Add Global Partner"} className="mb-2"></PageHeader>
      <GlobalPartnerForm
        initialValues={initialValues}
        isUpdate={isUpdate}
        slug={slug}
        id={data?.id}
      />
    </>
  );
};

export default SingleGlobalPartner;
