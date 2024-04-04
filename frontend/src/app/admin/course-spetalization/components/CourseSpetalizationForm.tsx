"use client";
import { Grid, Box, Checkbox } from "@mui/material";
import TextEditor from "components/admin/richTextEditor";
import { AutoComplete, Button, Input, Label } from "components/layout";
import { Formik, Form } from "formik";
import { useCreateOrUpdate } from "hooks";
import {
  Course,
  CourseSpecializationInterface,
  UniversityInterface,
} from "interfaces/course";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";

type Props = {
  initialValues: CourseSpecializationInterface;
  isUpdate: boolean;
  slug: string;
  id?: string;
  courseData: Course[];
  universityData: UniversityInterface[];
};

const CourseSpecializationForm = ({
  initialValues,
  isUpdate,
  id,
  courseData,
  universityData,
}: Props) => {
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/course-specialization/${id}`
      : "/configurations/course-specialization",
    method: isUpdate ? "put" : "post",
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            ...values,
            university_id: (values?.university_id as any)?.id,
            course_id: (values?.course_id as any)?.id,
            credits: +values.credits,
            student_enrolled: +values.student_enrolled,
            courses: +values.courses,
          },
          {
            onSuccess(resp) {
              resetForm();
              toast(
                `Course Specialization ${
                  isUpdate ? "Updated" : "Created"
                } Successfully`
              );
              router.push(`/admin/course-spetalization/${values.slug}`);
            },
          }
        );
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container className="" gap={3}>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Slug" />
              <Input name="slug" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Name" />
              <Input name="name" />
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
              <Label text="Eligibilty" />
              <Input name="eligibilty" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Delivery Mode" />
              <Input name="delivery_mode" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <AutoComplete
                name="university_id"
                options={universityData || []}
                getOptionLabel={(value: any) => value.name}
                label="Select University"
              ></AutoComplete>
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <AutoComplete
                name="course_id"
                options={courseData || []}
                getOptionLabel={(value: any) => value.name}
                label="Select Course"
              ></AutoComplete>
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Credits" />
              <Input name="credits" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Duration" />
              <Input name="duration" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Student Enrolled" />
              <Input name="student_enrolled" />
            </Grid>

            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Is Published" />
              <Checkbox
                name="is_published"
                checked={values.is_published}
                onChange={(item: any) => {
                  setFieldValue("is_featured", item.target.checked);
                }}
              />
            </Grid>

            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Webinar" />
              <Checkbox
                name="webinar"
                checked={values.webinar}
                onChange={(item: any) => {
                  setFieldValue("webinar", item.target.checked);
                }}
              />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="International Regonization " />
              <Checkbox
                name="internationalRegonization "
                checked={values.internationalRegonization}
                onChange={(item: any) => {
                  setFieldValue(
                    "internationalRegonization",
                    item.target.checked
                  );
                }}
              />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Courses" />
              <Input name="courses" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Learning Path" />
              <Input name="learningPath" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Learning Pedagogy" />
              <Input name="learningPedagogy" />
            </Grid>
            <Grid xs={5.9} flexDirection={"column"}>
              <Label text="Brouchre" />
              <Input name="brouchre" />
            </Grid>
          </Grid>

          <Grid xs={12} item className="mt-8">
            <Box className="flex justify-end">
              <Button
                color="secondary"
                className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                variant="contained"
                disabled={isLoading}
                href="/admin/blog"
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

export default CourseSpecializationForm;
