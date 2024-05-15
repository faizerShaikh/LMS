"use client";
import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { FaqInterface, Topics } from "interfaces/faq";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import { Add, Edit, IbmWatsonKnowledgeCatalog } from "@carbon/icons-react";
import { Box, Grid, IconButton } from "@mui/material";
import { CreateUpdateDialogBaseProps } from "interfaces";
import { Form, Formik } from "formik";
import { toast } from "utils";
import { UsersInterface } from "interfaces/users";

const initialValues: UsersInterface[] = [
  {
    name: "",
    email: "",
    password: "",
    contactNumber: 0,
    role: "",
  },
];

export const UserCreateForm = ({
  data,
  isUpdate,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/user/${data.id}` : "/user",
    method: isUpdate ? "put" : "post",
  });

  return (
    <Dialog
      button={
        isUpdate ? (
          <IconButton>
            <Edit></Edit>
          </IconButton>
        ) : (
          <Button startIcon={<Add />}>Add New User</Button>
        )
      }
      title={"Add FAQ Data"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, orderBy: +values.orderBy },
              {
                onSuccess() {
                  resetForm();
                  queryClient.refetchQueries(refetchURL, {
                    exact: false,
                    stale: true,
                  });
                  toast("User created successfull");
                  onClose();
                },
              }
            );
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Grid container>
                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <Label text="Name" required />
                    <Input name="name" />
                  </Grid>
                  <Grid xs={12} item>
                    <Label text="Email" required />
                    <Input name="email" />
                  </Grid>
                  <Grid xs={12} item>
                    <Label text="Password" required />
                    <Input name="password" />
                  </Grid>
                  <Grid xs={12} item>
                    <Label text="Contact Number" required />
                    <Input name="contactNumber" />
                  </Grid>
                  <Grid xs={12} item>
                    <Label text="Role" required />
                    <AutoComplete
                      name="role"
                      options={["Admin", "Faculty", "Finance"]}
                      getOptionLabel={(values: any) => values}
                    ></AutoComplete>
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
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};

export default UserCreateForm;
