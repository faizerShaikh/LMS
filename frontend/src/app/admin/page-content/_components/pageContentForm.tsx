"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Grid, Box, Button } from "@mui/material";
import { DropZone, Input, Label, Tabs } from "components/layout";
import toast from "react-hot-toast";
import { useCreateOrUpdate } from "hooks";
import { API } from "configs";
import {
 
  PageContentInterface, 
} from "interfaces";
import { useRouter } from "next/navigation";
import PageGallary from "./PageGallary";

type Props = {
  initialValues: PageContentInterface;

  slug: string;
};

const PageContentForm = ({ initialValues, slug}: Props) => {
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
              <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => {
                  mutate(
                    { ...values },
                    {
                      onSuccess(resp) {
                        handleFileUpload(
                          values.coverImage,
                          resp.data.data.id,
                          () => {
                            resetForm();
                            toast(`Page Content Updated Successfully`);
                            router.push("/admin/page-content");
                          }
                        );
                      },
                    }
                  );
                }}
                
              >
                <Form>
                  <Grid
                    container
                    columnSpacing={3}
                    rowSpacing={2}
                    className="mt-4"
                  >
                    <Grid item xs={12}>
                      <Label text="Upload your image" required />
                      <DropZone name="coverImage" />
                    </Grid>
                    <Grid item xs={6}>
                      <Label text="Name" required />
                      <Input name="name" disabled />
                    </Grid>
                    <Grid item xs={6}>
                      <Label text="Slug" required />
                      <Input name="slug" />
                    </Grid>
                    <Grid item xs={12}>
                      <Label text="Title" required />
                      <Input name="title" />
                    </Grid>
                    <Grid item xs={12}>
                      <Label text="Title Description" required />
                      <Input name="titleDescription" />
                    </Grid>
                    <Grid item xs={12}>
                      <Label text="Page Description" />
                      <Input name="pageDescription" />
                    </Grid>
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="flex-end">
                        <Button
                          variant="contained"
                          color="secondary"
                          className="mr-2"
                          disabled={isLoading}
                          href="/admin/pageContent"
                        >
                          Discard
                        </Button>
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={isLoading}
                        >
                          Save
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            ),
          },
          {
            id: 1,
            buttonLabel: "Page Gallary",
            component: <PageGallary slug={slug}/>,
          },
        ]}
      ></Tabs>
    </div>
  );
};

export default PageContentForm;
