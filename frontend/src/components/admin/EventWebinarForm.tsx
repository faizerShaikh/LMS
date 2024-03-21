"use client";

import { Box, Checkbox, Divider, Grid, IconButton } from "@mui/material";
import {
  AutoComplete,
  Button,
  DropZone,
  Input,
  Label,
} from "components/layout";
import { API } from "configs";
import { FieldArray, Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";
import TextEditor from "./richTextEditor";
import { Add, TrashCan } from "@carbon/icons-react";

type Props = {
  initialValues: any;
  isUpdate: Boolean;
  id?: string;
  apiEndPoint: string;
  apiEndPointImage: string;
  isWebinar: boolean;
};

const EventWebinarForm = ({
  initialValues,
  isUpdate,
  id,
  apiEndPoint,
  apiEndPointImage,
  isWebinar,
}: Props) => {
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `${apiEndPoint}/${id}` : apiEndPoint,
    method: isUpdate ? "put" : "post",
  });

  const handleFileUpload = async (
    file: File | string,
    id: string,
    onSuccess: VoidFunction
  ) => {
    if (typeof file !== "string") {
      const formData = new FormData();
      formData.append(isWebinar ? "coverImage" : "eventImage", file);
      await API.put(`${apiEndPointImage}/${id}`, formData);
    }
    onSuccess();
  };

  const optionsType = ["webinar", "on-Site"];
  const Speakers = [
    {
      image: "",
      bio: "",
      name: "",
    },
  ];

  return (
    <Formik
      initialValues={{ ...initialValues, speakers: Speakers }}
      onSubmit={(values, { resetForm }) => {
        mutate(
          { ...values },
          {
            onSuccess(resp) {
              handleFileUpload(
                isWebinar ? values.coverImage : values.eventImage,
                resp.data.data.id,
                () => {
                  resetForm();
                  toast(
                    isWebinar
                      ? `Webinar ${
                          isUpdate ? "updated" : "Created"
                        }Successfully`
                      : `Event ${isUpdate ? "updated" : "Created"}Successfully`
                  );
                  router.push("/admin/event");
                }
              );
            },
          }
        );
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container columnSpacing={10} gap={3}>
            <Grid xs={12} item>
              <Box>
                <Label text="Upload Your Image" />
                <DropZone name={isWebinar ? "coverImage" : "eventImage"} />
              </Box>
              <Box className="mt-4">
                <Label text="Name" />
                <Input name="name" />
              </Box>
              <Box className="mt-4 mb-16">
                <Label text="Description" />
                <TextEditor
                  name="description"
                  label="Description"
                  setFieldValue={setFieldValue}
                  value={values?.description}
                />
              </Box>
              {isWebinar && (
                <Box className="mt-4 mb-16">
                  <Label text="Agenda" />
                  <TextEditor
                    name="agenda"
                    label="Agenda"
                    setFieldValue={setFieldValue}
                    value={values?.agenda}
                  />
                </Box>
              )}
              <Box className="mt-4">
                <Label text="Event Location" />
                <Input name="eventLocation" />
              </Box>
              <Box className="mt-4">
                <Label text="Slug" />
                <Input name="slug" />
              </Box>
              <Grid className="flex flex-wrap ">
                <Grid xs={6}>
                  <Box className="mt-4">
                    <Label text="Start Day Time" />
                    <Input type="datetime-local" name="startDayTime" />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box className="mt-4">
                    <Label text="End Day Time" />
                    <Input type="datetime-local" name="endDayTime" />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box className="mt-4">
                    <Label text="Deadline Day Time" />
                    <Input type="datetime-local" name="deadLine" />
                  </Box>
                </Grid>

                <Box className="mt-4">
                  <Label text="Is Featured" />
                  <Checkbox
                    name="is_featured"
                    checked={values.isFeatured}
                    onChange={(event: any) => {
                      setFieldValue("isFeatured", event.target.checked);
                    }}
                  />
                </Box>
              </Grid>
              <Box className="mt-4">
                <Label text="Type" required />
                <AutoComplete
                  name="eventType"
                  options={optionsType}
                ></AutoComplete>
              </Box>
              {isWebinar && (
                <FieldArray
                  name="speakers"
                  render={(FieldArrayProp) => {
                    console.log(FieldArrayProp);
                    const { push, remove, form } = FieldArrayProp;
                    const { values } = form;
                    const { speakers } = values;
                    return (
                      <div>
                        {speakers.map((item: any, index: number) => (
                          <div key={index}>
                            <Grid xs={12} item>
                              <Label text="Name" />
                              <Input
                                name={`speakers.${index}.name`}
                                className="mb-4"
                              />
                            </Grid>
                            <Grid xs={12} item>
                              <Label text="Bio" />
                              <Input
                                name={`speakers.${index}.bio`}
                                className="mb-4"
                              />
                            </Grid>
                            {speakers.length > 1 && (
                              <IconButton
                                type="button"
                                onClick={() => remove(index)}
                                className="text-red-500"
                              >
                                <TrashCan />
                              </IconButton>
                            )}

                            <Divider className="my-5" />
                            {index === speakers.length - 1 && (
                              <IconButton
                                type="button"
                                onClick={() =>
                                  push({
                                    image: "",
                                    bio: "",
                                    name: "",
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
                />
              )}
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
            <Grid xs={12} item></Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EventWebinarForm;
