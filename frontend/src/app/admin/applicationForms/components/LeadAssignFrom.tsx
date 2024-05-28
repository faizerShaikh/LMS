import { CreateUpdateDialogBaseProps } from "interfaces";
import { AutoComplete, Button, Checkbox, Dialog } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate, useGetAll } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Edit, UserData } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";

export const LeadAssignForm = ({
  pageId,
  data,
}: CreateUpdateDialogBaseProps) => {
  const initialValues = {
    applicationId: pageId,
    assignedTo: {
      name: "",
      id: "",
    },
  };

  const queryClient = useQueryClient();
  // console.log(data?.lead?.assignedUser?.name, "<<<<<<<<<<data");
  const { data: SalesUsersData } = useGetAll({
    key: "/user/Sales-Team",
    select: (data) => data.data.data?.rows,
  });

  const { mutate, isLoading } = useCreateOrUpdate({
    url: data.lead
      ? `/configurations/leads/${data.lead.id}`
      : "/configurations/leads",
    method: data.lead ? "put" : "post",
  });

  return (
    <Dialog
      button={
        <IconButton>
          <UserData />
        </IconButton>
      }
      title={"Assign Lead"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{
            ...initialValues,
            assignedTo: data?.lead?.assignedUser,
          }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, assignedTo: values.assignedTo.id },
              {
                onSuccess() {
                  resetForm();
                  queryClient.refetchQueries(`/users/Sales-Team`, {
                    exact: false,
                    stale: true,
                  });
                  toast(`Lead Assign successfully`);
                  onClose();
                },
              }
            );
          }}
        >
          <Form>
            <Grid container columnSpacing={10} className="" gap={3}>
              <Grid xs={12} item>
                <Box className="mt-4">
                  <AutoComplete
                    name="assignedTo"
                    options={SalesUsersData || []}
                    getOptionLabel={(value: any) => value.name}
                    label="Assign To"
                  ></AutoComplete>
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
