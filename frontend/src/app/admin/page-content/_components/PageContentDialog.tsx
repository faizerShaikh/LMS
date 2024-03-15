import { CreateUpdateDialogBaseProps, PageContentInterface } from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import {  Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid,  IconButton } from "@mui/material";
import { MetaDataInitial } from "initials";
import { Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";
import * as Yup from "yup";

const initialValues: PageContentInterface = {
  id:"",
  slug: "",
  name: "",
  title: "",
  titleDescription: "",
  pageDescription: "",
  coverImage: "",
  gallery: [],
  metaData: MetaDataInitial,
};

// const validationSchema = Yup.object({
//   coverImage : Yup.string().required("Required"),
//   name: Yup.string().required("Required"),
//   description: Yup.string().required("Required")
// })
export const PageContentDialog = ({
  data,
  isUpdate = true,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: `/configurations/page-content/${data.id}`,
    method: "put",
  });

  

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await API.put(
      `/configurations/page-content/update-page-image/${id}`,
      formData
    );
    onSuccess();
  };
  return (
    <Dialog
      button={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title="Edit Page Content"
    >
      {({ onClose }) => (
        <Formik
        // validationSchema={validationSchema}

          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp) {
                handleFileUpload(values.coverImage, resp.data.data.id, () => {
                  resetForm();
                  queryClient.refetchQueries(`/configurations/page-content`, {
                    exact: false,
                    stale: true,
                  });
                  toast(
                    `Press release ${
                      isUpdate ? "updated" : "added"
                    } successfully`
                  );
                  onClose();
                });
              },
            });
          }}

         
        >
          <Form>
            <Grid container columnSpacing={10} className="mt-8" gap={3}>
              <Grid xs={12} item>
                <Box>
                  <Label text="Upload your image" required />
                  <DropZone name="coverImage" />
                </Box>
                <Box className="mt-4">
                  <Label text="Name" required />
                  <Input name="name" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Slug" required />
                  <Input name="slug" />
                </Box>
                <Box className="mt-4">
                  <Label text="Title" required />
                  <Input name="title" />
                </Box>
                <Box className="mt-4">
                  <Label text="Title Description" required />
                  <Input name="titleDescription" />
                </Box>
                <Box className="mt-4">
                  <Label text="Page Description" />
                  <Input name="pageDescription" />
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
