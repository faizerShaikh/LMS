import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { Button, Dialog, Input, Label } from "../../../../components";
import { Formik, Form } from "formik";
import { CreateUpdateDialogBaseProps } from "interfaces";
import { Add, Edit, IbmWatsonKnowledgeCatalog } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import { toast } from "utils";
import { BlogCategory } from "interfaces/blogCategory";

const initialValues: BlogCategory = {
  name: "",
};

export const BlogCategoryDialog = ({
  data = {},
  isUpdate,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/blog/blog-category/${data!.id}`
      : "/configurations/blog/blog-category",

    method: isUpdate ? "put" : "post",
  });

  return (
    <Dialog
    button={
        isUpdate ? (
          <IconButton>
            <Edit />
          </IconButton>
        ) : (
          <Button startIcon={<Add />}>Add New Blog Category</Button>
        )
      }
      title={isUpdate ? "Edit Blog" : "Add Blog"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess() {
                resetForm();
                queryClient.refetchQueries(refetchURL, {
                  exact: false,
                  stale: true,
                });
                toast("Blog Category updated successfully");
                onClose();
              },
            });
          }}
        >
          <Form>
            <Grid container>
              <Grid container spacing={2}>
                <Grid xs={6} item>
                  <Label text="Name" required />
                  <Input name="name" />
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
        </Formik>
      )}
    </Dialog>
  );
};
