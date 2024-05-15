"use client";
import { CreateUpdateDialogBaseProps } from "interfaces";
import { Button, Dialog, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { Box, Grid, IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";

import { EventWebinarRagistrationInterface } from "interfaces/event";

export const EventWebinarRagistrationForm = ({
  data,
}: CreateUpdateDialogBaseProps) => {
  const initialValues: EventWebinarRagistrationInterface = {
    degree: "",
    email: "",
    eventId: "",
    experience: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
  };

  return (
    <Dialog
      button={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title={"View content"}
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
                  <Label text="First Name" />
                  <Input name="firstName" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Last Name" />
                  <Input name="lastName" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Email" />
                  <Input name="email" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Experience" />
                  <Input name="experience" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Mobile Number" />
                  <Input name="mobileNumber" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Degree" />
                  <Input name="degree" disabled />
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
