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

const initialBlogCategoryValues: BlogCategory = {
  name: "",
  id: "",
};



export const BlogDialog = ({ data, isUpdate }: CreateUpdateDialogBaseProps) => {
  const initialValues: SingleBlogInterface = {
    slug: "",
    title: "",
    description: "",
    is_featured:  false,
    blog_image: "",
    blog_category_id: "",
  };

  const queryClient = useQueryClient();
  const { data: categoryData } = useGetAll({
    key: "/configurations/blog/blog-category",
  });

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/configurations/blog/${data.id}` : "/configurations/blog",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("blog_image", file);
    await API.put(`/configurations/blog/blog-image/${id}`, formData);
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
          <Button startIcon={<Add />}>Add New Blog</Button>
        )
      }
      title={isUpdate ? "Edit Blog" : "Add Blog"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(
              { ...values, blog_category_id: values.blog_category_id.id },
              {
                onSuccess(resp) {
                  handleFileUpload(values.blog_image, resp.data.data.id, () => {
                    resetForm();
                    queryClient.refetchQueries(`/configurations/blog`, {
                      exact: false,
                      stale: true,
                    });
                    toast(
                      `Blog ${isUpdate ? "updated" : "added"} successfully`
                    );
                    onClose();
                  });
                },
              }
            );
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Grid container columnSpacing={10} className="" gap={3}>
                <Grid xs={12} item>
                  <Box>
                    <Label text="Upload your image" />
                    <DropZone name="blog_image" />
                  </Box>
                  <Box className="mt-4">
                    <Label text="Slug" />
                    <Input name="slug" />
                  </Box>
                  <Box className="mt-4">
                    <Label text="Title" />
                    <Input name="title" />
                  </Box>
                  <Box className="mt-4 mb-12">
                    <Label text="Description" />
                    <TextEditor
                      name="description"
                      label="Description"
                      setFieldValue={setFieldValue}
                      value={values?.description}
                    />
                  </Box>

                  <Box className="mt-4">
                    <Label text="Is Featured" />
                    <Checkbox
                      name="is_featured"
                      checked={values.is_featured}
                      onChange={(event: any) => {
                        setFieldValue("is_featured", event.target.checked);
                      }}
                    />
                  </Box>
                  <Box className="mt-4">
                    <AutoComplete
                      name="blog_category_id"
                      options={categoryData?.rows || []}
                      getOptionLabel={(value: any) => value.name}
                      label="Category"
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
