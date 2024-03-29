"use client";

import { Grid, Box } from "@mui/material";
import TextEditor from "components/admin/richTextEditor";
import { DropZone, Button, Label, Input } from "components/layout";
import { API } from "configs";
import { Formik, Form } from "formik";
import { useCreateOrUpdate } from "hooks";

import { GlobalPartnerInterface } from "interfaces/globalPartner";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";

type Props = {
  initialValues: GlobalPartnerInterface;
  isUpdate: boolean;
  slug: string;
  id?: string;
};

const GlobalPartnerForm = ({ initialValues, isUpdate, id }: Props) => {
  console.log(`/configurations/global-partner/update-coverImage/${id}`);
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/global-partner/${id}`
      : "/configurations/global-partner",
    method: isUpdate ? "put" : "post",
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
        `/configurations/global-partner/update-cover-image/${slug}`,
        formData
      );
    }
    onSuccess();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            ...values,
          },
          {
            onSuccess(resp) {
              handleFileUpload(values.coverImage, resp.data.data.id, () => {
                resetForm();
                toast(
                  `Global Partner ${
                    isUpdate ? "Updated" : "Created"
                  } Successfully`
                );
                router.push("/admin/global-partner");
              });
            },
          }
        );
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container columnSpacing={10} className="" gap={3}>
            <Grid xs={12} item>
              <Box>
                <Label text="Upload your image" />
                <DropZone name="coverImage" />
              </Box>
              <Box className="mt-4">
                <Label text="Name" />
                <Input name="name" />
              </Box>
              <Box className="mt-4">
                <Label text="Slug" />
                <Input name="slug" />
              </Box>
              <Box className="mt-4 mb-14">
                <Label text="Vision" />
                <TextEditor
                  name="vision"
                  label="Vision"
                  setFieldValue={setFieldValue}
                  value={values?.vision}
                />
              </Box>
              <Box className="mt-4 mb-14">
                <Label text="Description" />
                <TextEditor
                  name="description"
                  label="Description"
                  setFieldValue={setFieldValue}
                  value={values?.description}
                />
              </Box>
              <Box className="mt-4  mb-14">
                <Label text="Objective" />
                <TextEditor
                  name="objective"
                  label="Objective"
                  setFieldValue={setFieldValue}
                  value={values?.objective}
                />
              </Box>
              <Box className="mt-4">
                <Label text="Popular Course" />
                <Input name="popular_course" />
              </Box>
              <Box className="mt-4">
                <Label text="Address" />
                <Input name="address" />
              </Box>
              <Box className="mt-4">
                <Label text="Phone Number" />
                <Input name="phone" />
              </Box>
              <Box className="mt-4">
                <Label text="Website" />
                <Input name="website" />
              </Box>
              <Box className="mt-4">
                <Label text="Email" />
                <Input name="email" />
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box className="flex justify-end">
                <Button
                  color="secondary"
                  className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                  variant="contained"
                  disabled={isLoading}
                  href="/admin/global-partner"
                >
                  Discard
                </Button>
                <Button
                  variant="contained"
                  className="capitalize ml-4 px-4 xl:text-sm 2xl:text-semi-base"
                  type="submit"
                  isLoading={isLoading}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default GlobalPartnerForm;
