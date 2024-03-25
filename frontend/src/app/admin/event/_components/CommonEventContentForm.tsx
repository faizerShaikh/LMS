import { CreateUpdateDialogBaseProps, GalleryInterface } from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";
import { CommonContentEventInterface } from "interfaces/event";

export const CommonEventContentForm = ({
  data,
  isUpdate,

  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: CommonContentEventInterface = {
    title: "",
    description: "",
    orderBy: 0,
    image: "",
    type: "",
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useCreateOrUpdate({
    url:
      isUpdate && data
        ? `/configurations/gallery/${data.id}`
        : "/configurations/gallery",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await API.put(
      `/configurations/gallery/update-gallery-image/${id}`,
      formData
    );
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
          <Button startIcon={<Add />}>ADD NEW</Button>
        )
      }
      title={isUpdate ? "Edit content" : "Add content"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, orderBy: +values.orderBy },
              {
                onSuccess(resp) {
                  handleFileUpload(values.coverImage, resp.data.data.id, () => {
                    resetForm();
                    queryClient.refetchQueries(refetchURL, {
                      exact: false,
                      stale: true,
                    });
                    toast(`${isUpdate ? "updated" : "added"} successfully`);
                    onClose();
                  });
                },
              }
            );
          }}
        >
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
                <Box className="mt-4">
                  <Label text="Description" required />
                  <Input name="description" />
                </Box>
                <Box className="mt-4">
                  <Label text="Order By" required />
                  <Input name="orderBy" />
                </Box>
                <Box className="mt-4">
                  <Label text="Type" required />
                  <Input name="type" />
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
