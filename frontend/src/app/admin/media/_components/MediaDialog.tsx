import { CreateUpdateDialogBaseProps} from "interfaces";
import {
  Button,
  Checkbox,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { Form, Formik} from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { MediaPressReleaseInterface } from "interfaces/midiaPressRelese";
import * as Yup from "yup";
import { useState } from "react";
import { API } from "configs";

const initialValues: MediaPressReleaseInterface = {
  slug: "",
  title: "",
  link: "",
  description: "",
  isFeatured: false,
  coverImage: "",
};
const validationSchema = Yup.object({
  slug: Yup.string().required("Slug is Required"),
  title: Yup.string().required("Title is Required"),
  link: Yup.string().required("Link is Required").url("Privioded value must be a URL"),
  description: Yup.string().required("Description is Required"),
  coverImage: Yup.string().required("Cover Image Required"),
});

export const MediaDialog = ({
  data,
  isUpdate,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(null);

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/press-release/${data.id}`
      : "/configurations/press-release",
    method: isUpdate ? "put" : "post",
  });

  const { mutate: fileUploadMutate } = useCreateOrUpdate({
    url: `/configurations/press-release/update-press-image/${id}`,
    method: "put",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await API.put(`/configurations/press-release/update-press-image/${id}`,formData);
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
          <Button startIcon={<Add />}>Add Press Release</Button>
        )
      }
      title={isUpdate ? "Edit Press Release" : "Add Press Release"}
    >
      {({ onClose }) => (
        <Formik
          validationSchema={validationSchema}
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp, variables, context) {
                handleFileUpload(values.coverImage, resp.data.data.id, () => {
                  resetForm();
                  queryClient.refetchQueries(`/configurations/press-release`, {
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
          {({ setFieldValue, values }) => (
          <Form>
            <Grid container columnSpacing={10} className="" gap={3}>
              <Grid xs={12} item>
                <Box>
                  <Label text="Upload your image" required/>
                  <DropZone name="coverImage" />
                  {/* <Input name="file" type="file" onChange={handleImage} /> */}
                </Box>
                <Box className="mt-4">
                  <Label text="Slug" required/>
                  <Input name="slug" />
                </Box>
                <Box className="mt-4">
                  <Label text="Title" required/>
                  <Input name="title" />
                </Box>
                <Box className="mt-4">
                  <Label text="Description" required/>
                  <Input name="description" />
                </Box>
                <Box className="mt-4">
                  <Label text="Link" required/>
                  <Input name="link" />
                </Box>
                <Box className="mt-4">
                  <Label text="Is Featured" />
                  <Checkbox name="isFeatured" 
                   checked={values.isFeatured}
                   onChange={(e: any) => {
                     setFieldValue("isFeatured", e.target.checked);
                   }}/>
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
