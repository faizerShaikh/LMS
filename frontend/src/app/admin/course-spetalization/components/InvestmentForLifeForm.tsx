"use client";
import {
  AdmissionProcessInterface,
  CreateUpdateDialogBaseProps,
} from "interfaces";
import { Button, DropZone, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid } from "@mui/material";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";
import TextEditor from "components/admin/richTextEditor";

export const InvestmentForLifeForm = ({
  data,
  isUpdate,
  pageId,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: AdmissionProcessInterface = {
    title: "",
    description: "",
    image: "",
    course_specialization_id: pageId,
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useCreateOrUpdate({
    url:
      isUpdate && data
        ? `/configuration/infos/${data.id}`
        : `/configurations/infos/course-specialization/${pageId}`,
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("image", file);
    await API.put(`/configurations/infos/update-image/${id}`, formData);
    onSuccess();
  };

  return (
    <Formik
      initialValues={{ ...initialValues, ...data }}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            title: values.title,
            description: values.description,
            course_specialization_id: pageId,
          },
          {
            onSuccess(resp) {
              handleFileUpload(values.image, resp.data.data.id, () => {
                queryClient.refetchQueries(refetchURL, {
                  exact: false,
                  stale: true,
                });
                toast(
                  `Investment For life  ${
                    isUpdate ? "updated" : "added"
                  } successfully`
                );
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
                <Label text="Upload your image" required />
                <DropZone name="image" />
              </Box>

              <Box className="mt-4">
                <Label text="Title" required />
                <Input name="title" />
              </Box>
              <Box className="mt-4 mb-16">
                <Label text="Description" required />
                <TextEditor
                  name="description"
                  label="Description"
                  setFieldValue={setFieldValue}
                  value={values?.description}
                />
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box className="flex justify-end">
                <Button
                  color="secondary"
                  className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                  variant="contained"
                  disabled={isLoading}
                  href="/admin/course-spetalization"
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
