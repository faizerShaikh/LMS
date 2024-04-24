import { CreateUpdateDialogBaseProps } from "interfaces";
import { Button, Dialog, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { Box, Grid, IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";

import { ApplicaationFormInterface } from "interfaces/applicationForm";

export const ApplicationRegistrationView = ({
  data,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: ApplicaationFormInterface = {
    fullName: "",
    mobileNumber: "",
    emailID: "",
    gender: "",
    nationality: "",
    governmentIDType: "",
    country: "",
    state: "",
    city: "",
    howDoYouKnowAboutRiseBack: "",
    universityName: "",
    selectCourse: "",
    specialization: "",
    updatedAt: "",
    createdAt: "",
    dateOfBirth: "",
  };
  return (
    <Dialog
      button={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title={"view Content"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={() => {}}
        >
          <Form>
            <Grid container columnSpacing={10} className="" gap={3}>
              <Grid xs={12} item>
                <Box className="mt-4">
                  <Label text="Full Name" required />
                  <Input name="fullName" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Mobile Number" required />
                  <Input name="mobileNumber" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Email ID" required />
                  <Input name="emailID" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Gender" required />
                  <Input name="gender" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Nationality" />
                  <Input name="nationality" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Government ID Type" />
                  <Input name="governmentIDType" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Country" />
                  <Input name="country" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="State" />
                  <Input name="state" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="City" />
                  <Input name="city" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="How Do You Know About RiseBack" />
                  <Input name="howDoYouKnowAboutRiseBack" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="University Name" />
                  <Input name="universityName" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Selected Course" />
                  <Input name="selectCourse" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Specialization" />
                  <Input name="specialization" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Date Of Birth" />
                  <Input name="dateOfBirth" disabled />
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Box className="flex justify-end">
                  <Button
                    color="secondary"
                    className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                    variant="contained"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Discard
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