"use client";
import { Grid, Box } from "@mui/material";
import TextEditor from "components/admin/richTextEditor";
import {
  AutoComplete,
  Button,
  DropZone,
  Input,
  Label,
} from "components/layout";
import { API } from "configs";
import { Formik, Form } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Course, CustomCourseInterface } from "interfaces/course";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";

type Props = {
  initialValues: CustomCourseInterface;
  isUpdate: boolean;
  slug: string;
  id?: string;
  courseData: Course[];
};
const CustomCourseSpecializationForm = ({
  initialValues,
  isUpdate,
  courseData,
}: Props) => {
  const router = useRouter();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/course-specialization/${initialValues.id}`
      : "/configurations/course-specialization",
    method: isUpdate ? "put" : "post",
  });
  const handleFileUpload = async (
    file: File | string,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("syllabus", file);
    await API.put(
      `/configurations/course-specialization/update-syllabus/${id}`,
      formData
    );

    onSuccess();
  };
  const handleCoverImageUploade = async (
    file: File | string,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("cover_image", file);
    await API.put(
      `/configurations/course-specialization/cover-image/${id}`,
      formData
    );

    onSuccess();
  };
  return (
    <Formik
      initialValues={{
        ...initialValues,
        course_id: initialValues.course,
      }}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            ...values,
            course_id: (values?.course_id as any)?.id,
          },
          {
            onSuccess(resp) {
              handleFileUpload(
                values.syllabus,
                isUpdate ? initialValues.id : resp.data.data.id,
                () => {
                  resetForm();
                  toast(
                    `Custom Course Specialization ${
                      isUpdate ? "Updated" : "Created"
                    } Successfully`
                  );
                }
              );
              handleCoverImageUploade(
                values.cover_image,
                isUpdate ? initialValues.id : resp.data.data.id,
                () => {
                  resetForm();
                  toast(
                    `Custom Course Specialization ${
                      isUpdate ? "Updated" : "Created"
                    } Successfully`
                  );
                  router.push("/admin/custom-course-specialization");
                }
              );
            },
          }
        );
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container className="" gap={3}>
            <Grid xs={12} flexDirection={"column"}>
              <Label text="Cover Image" />
              <DropZone name="cover_image" />
            </Grid>
            <Grid xs={12} flexDirection={"column"}>
              <Label text="Syllabus" />
              <DropZone
                accept={{
                  "application/pdf": [".pdf"],
                }}
                name="syllabus"
              />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Slug" />
              <Input name="slug" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Name" />
              <Input name="name" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Days" />
              <Input name="days" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Short Info" />
              <Input name="shortInfo" />
            </Grid>
            <Grid xs={12} flexDirection={"column"} className="mb-8">
              <Label text="Description" />
              <TextEditor
                name="description"
                label="Description"
                setFieldValue={setFieldValue}
                value={values?.description}
              />
            </Grid>

            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Select Course" />

              <AutoComplete
                name="course_id"
                options={courseData || []}
                getOptionLabel={(value: any) => value.name}
              ></AutoComplete>
            </Grid>

            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Duration" />
              <Input name="duration" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Fees" />
              <Input name="fees" />
            </Grid>
          </Grid>

          <Grid xs={12} flexDirection={"column"} className="mb-16 mt-8">
            <Label text="Page Description" />
            <TextEditor
              name="textarea"
              label="textarea"
              setFieldValue={setFieldValue}
              value={values?.textarea}
            />
          </Grid>

          <Grid xs={12} flexDirection={"column"} className="mb-16 mt-8">
            <Label text="Notes / Disclaimer" />
            <TextEditor
              name="notes"
              label="notes"
              setFieldValue={setFieldValue}
              value={values?.notes}
            />
          </Grid>

          <Grid xs={12} item className="mt-8">
            <Box className="flex justify-end">
              <Button
                color="secondary"
                className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                variant="contained"
                disabled={isLoading}
                href="/admin/custom-course-specialization"
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
        </Form>
      )}
    </Formik>
  );
};

export default CustomCourseSpecializationForm;
