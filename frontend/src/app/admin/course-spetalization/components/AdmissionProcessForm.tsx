import {
  AdmissionProcessInterface,
  CreateUpdateDialogBaseProps,
} from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";

export const AdmissionProcessFrom = ({
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
        ? `/course-specialization/admission-process/${data.id}`
        : "/course-specialization/admission-process",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("image", file);
    await API.put(
      `/course-specialization/admission-process/update-image/${id}`,
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
          <Button startIcon={<Add />}>Admission Process</Button>
        )
      }
      title={isUpdate ? "Edit Admission Process" : "Add Admission Process"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, course_specialization_id: pageId },
              {
                onSuccess(resp) {
                  handleFileUpload(values.image, resp.data.data.id, () => {
                    resetForm();
                    queryClient.refetchQueries(refetchURL, {
                      exact: false,
                      stale: true,
                    });
                    toast(
                      `Admission Process ${
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
                  <Label text="Title" required />
                  <Input name="title" />
                </Box>
                <Box className="mt-4">
                  <Label text="Description" required />
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
