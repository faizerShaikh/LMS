import { CreateUpdateDialogBaseProps, PageContentInterface } from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Field, Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, Icon, IconButton, dividerClasses } from "@mui/material";
import { MetaDataForm } from "../../../../components/admin";
import { MetaDataInitial } from "initials";
import { Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { useState } from "react";
import { API } from "configs";
import { FieldArray } from "formik";

const initialValues: PageContentInterface = {
  name: "",
  title: "",
  titleDescription: "",
  pageDescription: "",
  coverImage: null,
  gallery: [],
  metaData: MetaDataInitial,
};

export const PageContentDialog = ({
  data,
  isUpdate = true,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(null);

  const { mutate, isLoading } = useCreateOrUpdate({
    url: `/configurations/page-content/${data.id}`,
    method: "put",
  });

  const { mutate: fileUploadMutate } = useCreateOrUpdate({
    url: `/configurations/page-content/update-page-image/${id}`,
    method: "put",
  });

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await API.put(
      `/configurations/page-content/update-page-image/${id}`,
      formData
    );
    onSuccess();
  };
  return (
    <Dialog
      button={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title="Edit Page Content"
    >
      {({ onClose }) => (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp, variables, context) {
                const onSuccess = () => {
                  resetForm();
                  queryClient.refetchQueries(`/configurations/press-release`, {
                    exact: false,
                    stale: true,
                  });
                  toast(
                    `Press release ${
                      isUpdate ? "updated" : "added"
                    } successfully`
                  );
                  onClose();
                };
                if (values.coverImage instanceof File) {
                  handleFileUpload(
                    values.coverImage,
                    resp.data.data.id,
                    onSuccess
                  );
                } else {
                  onSuccess();
                }
              },
            });
          }}
        >
          <Form>
            <Grid container columnSpacing={10} className="mt-8" gap={3}>
              <Grid xs={12} item>
                <Box>
                  <Label text="Upload your image" required />
                  <DropZone name="coverImage" />
                </Box>
                <Box className="mt-4">
                  <Label text="Name" required />
                  <Input name="name" disabled />
                </Box>
                <Box className="mt-4">
                  <Label text="Title" required />
                  <Input name="title" />
                </Box>
                <Box className="mt-4">
                  <Label text="Title Description" required />
                  <Input name="titleDescription" />
                </Box>
                <Box className="mt-4">
                  <Label text="Page Description" />
                  <Input name="pageDescription" />
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Label text="Add Gallary Data" />
                <FieldArray
                  name="gallery"
                  render={(FieldArrayProp) => {
                    console.log("FieldArrayProp", FieldArrayProp);
                    const { push, remove, form } = FieldArrayProp;
                    const { values } = form;
                    const { gallery } = values;
                    console.log(gallery);
                    return (
                      <div>
                        {gallery.map((item: any, index: number) => (
                          <div key={index}>
                            <Label text="Image" />
                            <DropZone name={`gallary.${index}.coverImage`} />
                            
                            <Label text="Name" />
                            <Input name={`gallary.${index}.name`} />
                            <Label text="Description" />
                            <Input name={`gallary.${index}.description`} />

                            <Button type="button" onClick={() => remove(index)}>
                              Delete
                            </Button>
                            <Button type="button" onClick={() => push(index)}>
                              Add
                            </Button>
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
          </Form>
        </Formik>
      )}
    </Dialog>
  );
};
