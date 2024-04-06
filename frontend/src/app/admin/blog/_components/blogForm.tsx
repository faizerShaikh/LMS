"use client";
import { Grid, Box, Checkbox } from "@mui/material";
import TextEditor from "components/admin/richTextEditor";
import {
  DropZone,
  AutoComplete,
  Button,
  Label,
  Input,
} from "components/layout";
import { API } from "configs";
import { Formik, Form } from "formik";
import { useCreateOrUpdate } from "hooks";
import { SingleBlogInterface } from "interfaces/blog";
import { BlogCategory } from "interfaces/blogCategory";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";

type Props = {
  initialValues: SingleBlogInterface;
  isUpdate: boolean;
  slug: string;
  id?: string;
  categoryData: BlogCategory[];
};

const BlogForm = ({
  initialValues,
  isUpdate,
  slug,
  categoryData,
  id,
}: Props) => {
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/configurations/blog/${id}` : "/configurations/blog",
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File | string,
    slug: string,
    onSuccess: VoidFunction
  ) => {
    if (typeof file !== "string") {
      const formData = new FormData();
      formData.append("blog_image", file);
      await API.put(`/configurations/blog/blog-image/${slug}`, formData);
    }
    onSuccess();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            ...values,
            blog_category_id: (values?.blog_category_id as any)?.id,
          },
          {
            onSuccess(resp) {
              handleFileUpload(values.blog_image, resp.data.data.id, () => {
                resetForm();
                toast(`Blog ${isUpdate ? "Updated" : "Created"} Successfully`);
                router.push("/admin/blog");
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
                  options={categoryData || []}
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
                  href="/admin/blog"
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
  );
};

export default BlogForm;
