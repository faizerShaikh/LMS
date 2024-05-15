"use client";

import { Box, Checkbox, Divider, Grid, IconButton } from "@mui/material";
import {
  AutoComplete,
  Button,
  DropZone,
  Input,
  Label,
  PageHeader,
} from "components/layout";
import { API } from "configs";
import { FieldArray, Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";
import TextEditor from "./richTextEditor";
import { Add, TrashCan } from "@carbon/icons-react";
import moment from "moment";

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
      formData.append("eventImage", file);
      await API.put(`${apiEndPointImage}/${id}`, formData);
    }
    onSuccess();
  };

  const handleStratagicPartnerFileUpload = async (
    files: FileList,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const newFormData = new FormData();

    Array.from(files).forEach((file: File) => {
      newFormData.append(`stratigicPartners`, file);
    });

    await API.put(`/configurations/event/strategic-partner/${id}`, newFormData);

    onSuccess();
  };
  const speakersFileUpload = async (
    files: any,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const fields = ["speakers_images", "bio", "name", "linkdIn"];
    const fd = new FormData();

    for (const [index, file] of Object.entries(files) as any) {
      fd.append(`images[${index}]`, file.image);
    }

    await API.put(`/configurations/webinar/update-image/${id}`, fd);
    onSuccess();
  };

  const optionsType = ["webinar", "on-Site"];

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values, { resetForm }) => {
        mutate(
          {
            ...values,
            speakers: isWebinar
              ? values.speakers.map((item: any) => ({
                  ...item,
                  image: typeof item.image === "string" ? item.image : null,
                }))
              : undefined,
          },
          {
            onSuccess(resp) {
              handleFileUpload(
                values.eventImage,
                isWebinar ? resp.data.data.event.id : resp.data.data.id,

                () => {
                  resetForm();
                  toast(
                    isWebinar
                      ? `Webinar ${
                          isUpdate ? "updated" : "Created"
                        }Successfully`
                      : `Event ${isUpdate ? "updated" : "Created"} Successfully`
                  );
                  router.push(isWebinar ? "/admin/webinar" : "/admin/event");
                }
              );
              {
                !isWebinar &&
                  handleStratagicPartnerFileUpload(
                    values?.stratigicPartners,
                    resp.data.data.id,
                    () => {}
                  );
              }

              if (isWebinar) {
                speakersFileUpload(
                  values?.speakers,
                  resp.data.data.id,
                  () => {}
                );
              }
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
                <DropZone name="eventImage" />
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
              <Grid
                columnSpacing={5}
                container
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item xs={6}>
                  <Box className="mt-4">
                    <Label text="Start Day Time" />
                    <Input
                      type="datetime-local"
                      name="startDayTime"
                      value={moment(values.startDayTime).format(
                        "YYYY-MM-DDTHH:mm"
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="mt-4">
                    <Label text="End Day Time" />
                    <Input
                      type="datetime-local"
                      name="endDayTime"
                      value={moment(values.endDayTime).format(
                        "YYYY-MM-DDTHH:mm"
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="mt-4">
                    <Label text="Deadline Day Time" />
                    <Input
                      type="datetime-local"
                      name="deadLine"
                      value={moment(values.deadLine).format("YYYY-MM-DDTHH:mm")}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={6}
                  className="flex justify-start items-center gap-3 h-full"
                >
                  <Checkbox
                    name="is_featured"
                    checked={values.isFeatured}
                    onChange={(event: any) => {
                      setFieldValue("isFeatured", event.target.checked);
                    }}
                  ></Checkbox>
                  <Label text="Is Featured" />
                </Grid>
              </Grid>
              <Box className="mt-4 mb-4">
                <Label text="Type" required />
                <AutoComplete
                  name="eventType"
                  options={optionsType}
                ></AutoComplete>
              </Box>

              {!isWebinar && (
                <Box>
                  <Label text="Upload Universities Images" />
                  <DropZone multiple name="stratigicPartners" />
                </Box>
              )}

              {isWebinar && (
                <>
                  <PageHeader title="Speakers" className="mb-5"></PageHeader>

                  <FieldArray
                    name="speakers"
                    render={(FieldArrayProp) => {
                      const { push, remove, form } = FieldArrayProp;
                      const {
                        values: { speakers },
                      } = form;

                      return (
                        <div>
                          {speakers.map((item: any, index: number) => (
                            <Grid container key={index} columnSpacing={5}>
                              <Grid xs={6} item>
                                <Label text="Name" />
                                <Input
                                  name={`speakers.${index}.name`}
                                  className="mb-4"
                                />
                              </Grid>
                              <Grid xs={6} item>
                                <Label text="Linkdin Link" />
                                <Input
                                  name={`speakers.${index}.linkdIn`}
                                  className="mb-4"
                                />
                              </Grid>
                              <Grid
                                xs={6}
                                item
                                className="flex justify-between items-center gap-5"
                              >
                                <div className="w-full">
                                  <Label text="Bio" />
                                  <Input
                                    name={`speakers.${index}.bio`}
                                    className="mb-4"
                                  />
                                </div>
                                {index === speakers.length - 1 && (
                                  <IconButton
                                    type="button"
                                    onClick={() =>
                                      push({
                                        speakers_images: "",
                                        bio: "",
                                        name: "",
                                      })
                                    }
                                    className="text-primary"
                                  >
                                    <Add />
                                  </IconButton>
                                )}
                                {speakers.length > 1 && (
                                  <IconButton
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="text-red-500"
                                  >
                                    <TrashCan />
                                  </IconButton>
                                )}
                              </Grid>
                              <Grid xs={12} item>
                                <Label text="Speaker Image" />
                                <DropZone name={`speakers.${index}.image`} />
                              </Grid>
                              <Grid xs={12} item>
                                <Divider className="my-5"></Divider>
                              </Grid>
                            </Grid>
                          ))}
                        </div>
                      );
                    }}
                  />
                </>
              )}
            </Grid>

            <Grid xs={12} item>
              <Box className="flex justify-end">
                <Button
                  color="secondary"
                  className="px-4 capitalize xl:text-sm 2xl:text-semi-base"
                  variant="contained"
                  disabled={isLoading}
                  href={isWebinar ? "/admin/webinar" : "/admin/event"}
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
