import React from "react";
import {
  AutoComplete,
  Button,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import { Add, Edit } from "@carbon/icons-react";
import { Box, Grid, IconButton } from "@mui/material";
import { Course, CreateUpdateDialogBaseProps } from "interfaces";
import { Form, Formik } from "formik";
import { toast } from "utils";
import { API } from "configs";

export const CourseForm = ({
  data,
  isUpdate,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: Course = {
    id: "",
    slug: "",
    name: "",
    description: "",
    course_image: "",
    course_level: "",
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/course/${data.id}`
      : "/configurations/course",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("course_image", file);
    await API.put(`/configurations/course/course-image/${id}`, formData);
    onSuccess();
  };
  return (
    <Dialog
      button={
        isUpdate ? (
          <IconButton>
            <Edit />
          </IconButton>
        ) : (
          <Button startIcon={<Add />}>Add New Course</Button>
        )
      }
      title={"Add New Course"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp) {
                handleFileUpload(values.course_image, resp.data.data.id, () => {
                  resetForm();
                  queryClient.refetchQueries(refetchURL, {
                    exact: false,
                    stale: true,
                  });
                  toast(
                    `Course ${isUpdate ? "updated" : "added"} successfully`
                  );
                  onClose();
                });
              },
            });
          }}
        >
          <Form>
            <Grid container>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <Label text="Name" required />
                  <Input name="name" />
                </Grid>

                <Grid xs={12} item>
                  <Label text="Description" required />
                  <Input name="description" />
                </Grid>
                <Grid xs={12} item>
                  <Label text="Slug" required />
                  <Input name="slug" />
                </Grid>
                <Grid xs={12} item>
                  <AutoComplete
                    name="course_level"
                    options={["Masters", "Undergraduate"]}
                    getOptionLabel={(value: any) => value}
                    label="Course Level"
                  ></AutoComplete>
                </Grid>
                <Grid xs={12} item>
                  <Label text="Course Image" required />
                  <DropZone name="course_image" />
                </Grid>
                <Grid xs={12} item>
                  <Box className="flex justify-end">
                    <Button
                      color="secondary"
                      className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                      variant="contained"
                      disabled={isLoading}
                      onClick={() => {
                        onClose();
                      }}
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
            </Grid>
          </Form>
        </Formik>
      )}
    </Dialog>
  );
};

export default CourseForm;
