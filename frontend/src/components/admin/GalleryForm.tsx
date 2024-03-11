import { Box, Divider, Grid, IconButton } from "@mui/material";
import React from "react";
import { Button, Input, Label, Dialog, DropZone } from "..";
import { Formik, Form, FieldArray } from "formik";
import {
  GalleryFormProps,
  GalleryInterface,
} from "interfaces";
import { Add, Delete, ImageReference, TrashCan } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import * as Yup from "yup";
import { toast } from "utils";

const validationSchema = Yup.object({
  name: Yup.string().required("name is Required"),
  description: Yup.string().required("Description is Required"),
  slug: Yup.string().required("Slug is Required"),
});

export const GalleryForm = ({
  data = {},
  isUpdate,
  refetchURL,
  pageId,
  
}: GalleryFormProps) => {
  const initialValues: { gallery: GalleryInterface[] } = {
    gallery: [
      {
        id:"",
        coverImage: "",
        name: "",
        description: "",
        orderBy: 1,
        pageId: pageId,
        slug: ""
      },
    ],
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: `/configurations/gallery/bulk-create`,
    method: "put",
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("pageId", pageId);

  return (
    <Dialog
      button={
        <IconButton>
          <ImageReference />
        </IconButton>
      }
      title={"Add Gallery Data"}
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            console.log("valuesvaluesvalues", values);
            const fields = [
              "coverImage",
              "name",
              "description",
              "orderBy",
              "pageId",
              "slug",
              "id"
            ];
            const fd = new FormData();
            for (let x = 0; x < values?.gallery.length; x++) {
              fields.forEach((f) => {
                fd.append(`data[${x}][${f}]`, values?.gallery[x]?.[f]);
              });
            }

            mutate(fd, {
              onSuccess(resp, variables, context) {
                queryClient.refetchQueries(refetchURL, {
                  exact: false,
                  stale: true,
                });
                toast(`Gallery ${isUpdate ? "updated" : "added"} successfully`);
                onClose();
              },
            });
          }}
        >
          <Form>
            <Grid container>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <FieldArray
                    name="gallery"
                    render={(FieldArrayProp) => {
                      const { push, remove, form } = FieldArrayProp;
                      const { values } = form;
                      const { gallery } = values;
                      console.log("gallerygallerygallerygallery", gallery);
                      return (
                        <div>
                          {gallery.map((item: any, index: number) => (
                            <div key={index}>
                              <Grid xs={12} item>
                                <Label text="Name" />
                                <Input
                                  name={`gallery.${index}.name`}
                                  className="mb-4"
                                />
                              </Grid>
                              <Grid xs={12} item></Grid>
                              <Label text="Description" />
                              <Input
                                name={`gallery.${index}.description`}
                                className="mb-4"
                              />
                               <Grid xs={12} item>
                                <Label text="Slug" />
                                <Input
                                  name={`gallery.${index}.slug`}
                                  className="mb-4"
                                />
                              </Grid>
                              <div className="flex items-center gap-4">
                                <Grid xs={6} item>
                                  <Label text="Image" />
                                  <DropZone
                                    name={`gallery.${index}.coverImage`}
                                  />
                                </Grid>
                                <Grid xs={6} item>
                                  <Label text="Order" />
                                  <Input name={`gallery.${index}.orderBy`} />
                                </Grid>
                              </div>
                              {gallery.length > 1 && (
                                <IconButton
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="text-red-500"
                                >
                                  <TrashCan />
                                </IconButton>
                              )}

                              <Divider className="my-5" />
                              {index === gallery.length - 1 && (
                                <IconButton
                                  type="button"
                                  onClick={() =>
                                    push({
                                      coverImage: "",
                                      name: "",
                                      description: "",
                                      orderBy: index + 1,
                                      pageId: pageId,
                                    })
                                  }
                                  className="text-red-500"
                                >
                                  <Add />
                                </IconButton>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  ></FieldArray>
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
