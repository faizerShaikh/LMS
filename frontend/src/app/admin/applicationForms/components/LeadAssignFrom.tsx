import { CreateUpdateDialogBaseProps } from "interfaces";
import {
  AutoComplete,
  Button,
  Checkbox,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate, useGetAll } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { API } from "configs";
import { SingleBlogInterface } from "interfaces/blog";
import { BlogCategory } from "interfaces/blogCategory";
import TextEditor from "components/admin/richTextEditor";

export const LeadAssignForm = ({
  data,
  isUpdate,
}: CreateUpdateDialogBaseProps) => {
  const initialValues = {
    applicationId: "",
    assignTo: "",
  };

  const queryClient = useQueryClient();
  const { data: SalesUsersData } = useGetAll({
    key: "/users/Sales-Team",
  });

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/users/Sales-Team/${data.id}` : "/users/Sales-Team",
    method: isUpdate ? "put" : "post",
  });

  return (
    <Dialog
      button={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title={"Assign Lead"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, blog_category_id: values.blog_category_id.id },
              {
                onSuccess(resp) {
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
          {({ setFieldValue, values }) => (
            <Form>
              <Grid container columnSpacing={10} className="" gap={3}>
                <Grid xs={12} item>
                  <Box className="mt-4">
                    <AutoComplete
                      name="assignTo"
                      options={SalesUsersData?.rows || []}
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
          )}
        </Formik>
      )}
    </Dialog>
  );
};
