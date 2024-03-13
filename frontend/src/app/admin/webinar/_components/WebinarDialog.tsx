import { CreateUpdateDialogBaseProps } from "interfaces";
import {
  Button,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate} from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";

import TextEditor from "components/admin/richTextEditor";
import { WebinarInterface } from "interfaces/webinar";

export const WebinarDialog = ({
  data,
  isUpdate,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: WebinarInterface = {
    coverImage: "",
    slug: "",
    title: "",
    description: "",
    agenda: "",
  };

  const queryClient = useQueryClient();
  

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/webinar/${data.id}`
      : "/configurations/webinar",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await API.put(`/configurations/webinar/webinar-image/${id}`, formData);
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
          <Button startIcon={<Add />}>Add New Webinar</Button>
        )
      }
      title={isUpdate ? "Edit Webinar" : "Add Webinar"}
    >
      {({ onClose }) => (
        <Formik
        initialValues={{ ...initialValues, ...data }}
        onSubmit={(values, { resetForm }) => {
          mutate(values, {
            onSuccess(resp) {
              handleFileUpload(values.coverImage, resp.data.data.id, () => {
                resetForm();
                queryClient.refetchQueries(`/configurations/webinar`, {
                  exact: false,
                  stale: true,
                });
                toast(
                  `Webinar ${
                    isUpdate ? "updated" : "added"
                  } successfully`
                );
                onClose();
              });
            },
          });
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
                    <Label text="Slug" />
                    <Input name="slug" />
                  </Box>
                  <Box className="mt-4">
                    <Label text="Title" />
                    <Input name="title" />
                  </Box>
                  <Box className="mt-4">
                    <Label text="Agenda" />
                    <TextEditor
                      name="agenda"
                      label="agenda"
                      setFieldValue={setFieldValue}
                      value={values?.agenda}
                    />
                  </Box>
                  <Box className="mt-4 mb-12">
                    <Label text="Description" />
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
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};
