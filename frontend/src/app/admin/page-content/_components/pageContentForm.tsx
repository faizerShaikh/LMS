"use client";
import React from "react";
import { Tabs } from "components/layout";
import { useCreateOrUpdate } from "hooks";
import { API } from "configs";
import { PageContentInterface } from "interfaces";
import { useRouter } from "next/navigation";
import PageGallary from "./PageGallary";
import PageDetailsForm from "./PageDetailsForm";

type Props = {
  initialValues: PageContentInterface;

  slug: string;
};

const PageContentForm = ({ initialValues, slug }: Props) => {
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: `/configurations/page-content/${slug}`,
    method: "put",
  });

  const handleFileUpload = async (
    file: File | string,
    slug: string,
    onSuccess: VoidFunction
  ) => {
    if (typeof file !== "string") {
      const formData = new FormData();
      formData.append("coverImage", file);
      await API.put(
        `/configurations/page-content/update-page-image/${slug}`,
        formData
      );
    }
    onSuccess();
  };

  return (
    <div>
      <Tabs
        tabs={[
          {
            id: 0,
            buttonLabel: "Page Content Detail",
            component: (
              <PageDetailsForm
                slug={slug}
                initialValues={initialValues}
              ></PageDetailsForm>
            ),
          },
          {
            id: 1,
            buttonLabel: "Page Gallary",
            component: <PageGallary slug={slug} pageId={initialValues.id} />,
          },
        ]}
      ></Tabs>
    </div>
  );
};

export default PageContentForm;
