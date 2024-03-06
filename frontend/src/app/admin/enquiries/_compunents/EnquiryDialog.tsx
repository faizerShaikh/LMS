import { CreateUpdateDialogBaseProps } from "interfaces";
import {
  Button,
  Dialog,
  Input,
  Label,
} from "../../../../components";
import { Form, Formik} from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import {  Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import * as Yup from "yup";
import { EnquiriesPageInterface } from "interfaces/enquiriesPage";

const initialValues: EnquiriesPageInterface = {
    name: "",
    organization: "",
    title: "",
    email: "",
    type: "",
    status: "",
    from: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  organization: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
});

export const EnquiryDialog = ({
  data,
  isUpdate,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/enquiry/${data!.id}`
      : "/configurations/enquiry",
    method: isUpdate ? "put" : "post",
  });
  

  return (
    <Dialog
    button={<IconButton ><Edit /></IconButton>}
    title={"Enquiry Form"}
    >
       {({ onClose }) => (
      <Formik
        validationSchema={validationSchema}
        initialValues={{ ...initialValues, ...data }}
        onSubmit={(values, { resetForm }) => {
          mutate(values, {
            onSuccess() {
              resetForm();
              queryClient.refetchQueries(`/configurations/enquiry`, {
                exact: false,
                stale: true,
              });
              toast("Enquiries Form Updated successfully");
              onClose();
            },
          });
        }}
        >
          <Form>
            <Grid container columnSpacing={10} className="" gap={3}>
              <Grid xs={12} item>
              <Box className="mt-4">
                  <Label text="Name" required/>
                  <Input name="name" />
                </Box>
                <Box className="mt-4">
                  <Label text="Organization" required/>
                  <Input name="organization" />
                </Box>
                <Box className="mt-4">
                  <Label text="Title" required/>
                  <Input name="title" />
                </Box>
                <Box className="mt-4">
                  <Label text="Email" required/>
                  <Input name="email" />
                </Box>
                <Box className="mt-4">
                  <Label text="Type" required/>
                  <Input name="type" />
                </Box>
                <Box className="mt-4">
                  <Label text="Status" required/>
                  <Input name="status" />
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
