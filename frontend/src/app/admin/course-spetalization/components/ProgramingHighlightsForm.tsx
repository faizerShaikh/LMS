import {
  CreateUpdateDialogBaseProps,
  ProgramHiglightsInterface,
} from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";

export const ProgramingHighlightsForm = ({
  data,
  isUpdate,
  pageId,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: ProgramHiglightsInterface = {
    name: "",
    image: "",
    course_specialization_id: "",
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useCreateOrUpdate({
    url:
      isUpdate && data
        ? `/configurations/program-highlights/${data.id}`
        : `/configurations/program-highlights/course-specialization/${pageId}`,
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File | string,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("image", file);
    await API.put(
      `/configurations/program-highlights/update-image/${id}`,
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
          <Button startIcon={<Add />}>Programing Highlights</Button>
        )
      }
      title={
        isUpdate ? "Edit Programing Highlights" : "Add Programing Highlights"
      }
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { name: values.name, course_specialization_id: pageId },
              {
                onSuccess(resp) {
                  handleFileUpload(values.image, resp.data.data.id, () => {
                    resetForm();
                    queryClient.refetchQueries(refetchURL, {
                      exact: false,
                      stale: true,
                    });
                    toast(
                      `Programing Highlights ${
                        isUpdate ? "updated" : "added"
                      } successfully`
                    );
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
                  <Label text="Name" required />
                  <Input name="name" />
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
