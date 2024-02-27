import { CreateUpdateDialogBaseProps, UniversityInterface } from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Form, Formik, useFormik, validateYupSchema } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { MetaDataForm } from "../../../../components/admin";
import { MetaDataInitial } from "initials";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import * as Yup from "yup";
import { MetaDatavalidateSchema } from "initials";
import { API } from "configs";
import { useState } from "react";

const initialValues: UniversityInterface = {
  name: "",
  short_name: "",
  description: "",
  university_image: "",
  // metaData: MetaDataInitial,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  short_name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  // university_image: Yup.string().required("Required"),
  // metaData: MetaDatavalidateSchema,
});

export const UniversityDialog = ({
  data,
  isUpdate,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(null);

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/university/${data.id}`
      : "/configurations/university",
    method: isUpdate ? "put" : "post",
  });

  const { mutate: fileUploadMutate } = useCreateOrUpdate({
    url: `/configurations/university/university-image/${id}`,
    method: "put",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("university_image", file);
    await API.put(`configurations/university/university-image/${id}`, formData);
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
          <Button startIcon={<Add />}>Add University</Button>
        )
      }
      title={isUpdate ? "Edit University" : "Add University"}
    >
      {({ onClose }) => (
        <Formik
          validationSchema={validationSchema}
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp, variables, context) {
                handleFileUpload(
                  values.university_image,
                  resp.data.data.id,
                  () => {
                    resetForm();
                    queryClient.refetchQueries(`configurations/university`, {
                      exact: false,
                      stale: true,
                    });
                    toast(
                      `University ${
                        isUpdate ? "updated" : "added"
                      } successfully`
                    );
                    onClose();
                  }
                );
              },
            });
          }}
        >
          <Form>
            <Grid container columnSpacing={10} className="mt-8" gap={3}>
              <Grid xs={12} item>
                <Box>
                  <Label text="Upload your image" required/>
                  <DropZone name="university_image"/>
                </Box>
                <Box>
                  <Label text="Title" required />
                  <Input name="name" />
                </Box>
                <Box className="mt-4">
                  <Label text="Short name" required/>
                  <Input name="short_name" />
                </Box>
                <Box className="mt-4">
                  <Label text="Description" required/>
                  <Input name="description" />
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
        </Formik>
      )}
    </Dialog>
  );
};
