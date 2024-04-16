"use client";
import { Grid, Box } from "@mui/material";
import { Button, Input, Label } from "components/layout";
import { Formik, Form } from "formik";
import { useCreateOrUpdate } from "hooks";
import { FeesStructureInterface } from "interfaces";

import React from "react";
import { toast } from "utils";

const FeesForm = ({ isUpdate, id, data }: any) => {
  const initialValues: FeesStructureInterface = {
    indian_semester_fees: 0,
    indian_annual_fees: 0,
    foreign_semester_fees: 0,
    foreign_annual_fees: 0,
    notes: "",
    course_specialization_id: "",
    ...data,
  };

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/course-specialization/fees/${id}`
      : `/configurations/course-specialization/fees/${id}`,
    method: isUpdate ? "put" : "post",
  });

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values, { resetForm }) => {
        delete values.id;
        mutate(
          {
            ...values,
            course_specialization_id: id,
            indian_semester_fees: +values.indian_semester_fees,
            indian_annual_fees: +values.indian_annual_fees,
            foreign_semester_fees: +values.foreign_semester_fees,
            foreign_annual_fees: +values.foreign_annual_fees,
          },
          {
            onSuccess() {
              resetForm();
              toast(
                `Fees Structure ${
                  isUpdate ? "Updated" : "Created"
                } Successfully`
              );
            },
          }
        );
      }}
    >
      <Form>
        <Grid container className="" gap={3}>
          <Grid xs={5.9} flexDirection={"column"}>
            <Label text="Indian Semester Fees" />
            <Input name="indian_semester_fees" />
          </Grid>
          <Grid xs={5.9} flexDirection={"column"}>
            <Label text="Indian Aannual Fees" />
            <Input name="indian_annual_fees" />
          </Grid>
          <Grid xs={5.9} flexDirection={"column"}>
            <Label text="Foreign Semester Fees" />
            <Input name="foreign_semester_fees" />
          </Grid>
          <Grid xs={5.9} flexDirection={"column"}>
            <Label text="Foreign Annual Fees" />
            <Input name="foreign_annual_fees" />
          </Grid>
          <Grid xs={12} flexDirection={"column"}>
            <Label text="Note" />
            <Input name="notes" />
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
    </Formik>
  );
};

export default FeesForm;
