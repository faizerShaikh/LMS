"use client";
import React from "react";
import {
  AutoComplete,
  Button,
  Dialog,
  Input,
  Label,
} from "../../../../components";
import { useCreateOrUpdate } from "hooks";
import { Add, Edit } from "@carbon/icons-react";
import { Box, Grid, IconButton } from "@mui/material";
import { CreateUpdateDialogBaseProps } from "interfaces";
import { Form, Formik } from "formik";
import { toast } from "utils";
import { UsersInterface } from "interfaces/users";
import { useQueryClient } from "react-query";
import { CountrySelect } from "react-country-state-city";

const initialValues: UsersInterface = {
  name: "",
  email: "",
  password: "",
  contactNumber: 0,
  role: "Finance",
  region: "",
};

export const FinanceTeamUserForm = ({
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
          <Button startIcon={<Add />}>Add New Accountant</Button>
        )
      }
      title={isUpdate ? "Edit Accountant " : "Add Accountant "}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{
            ...initialValues,
            ...data,
          }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values },
              {
                onSuccess() {
                  resetForm();
                  queryClient.refetchQueries(refetchURL, {
                    exact: false,
                    stale: true,
                  });
                  toast(
                    isUpdate
                      ? "Accountant updated successfully"
                      : "Accountant created successfully"
                  );
                  onClose();
                },
              }
            );
          }}
        >
          {({ setFieldValue }) => (
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
                    <Input name="password" type="password" />
                  </Grid>
                  <Grid xs={12} item>
                    <Label text="Contact Number" required />
                    <Input name="contactNumber" />
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    sx={{
                      "&  .stsearch-box": {
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px",

                        // backgroundColor: "gray",
                      },
                      ".stdropdown-input input": {
                        backgroundColor: "rgb(249 250 251)",
                        width: "100%",
                      },
                    }}
                  >
                    <Label text="Region" required />
                    {/* <Input name="region" /> */}
                    <div className="w-full flex-row border-2 rounded-md bg-gray-50">
                      <CountrySelect
                        onChange={(e: any) => {
                          setFieldValue("region", e.name);
                        }}
                      />
                    </div>
                  </Grid>

                  <Grid xs={12} item>
                    <Input name="role" type="hidden" value="SalesTeam" />
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

export default FinanceTeamUserForm;
