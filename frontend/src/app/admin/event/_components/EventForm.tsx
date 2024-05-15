"use client";

import { EventInterface } from "interfaces/event";

import { Box, Checkbox, Grid } from "@mui/material";
import {
  AutoComplete,
  Button,
  DropZone,
  Input,
  Label,
} from "components/layout";
import { API } from "configs";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "utils";

type Props = {
  initialValues: EventInterface;
  isUpdate: Boolean;
  id?: string;
};

const EventForm = ({ initialValues, isUpdate, id }: Props) => {
  const router = useRouter();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/configurations/event/${id}` : "/configurations/event",
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
      await API.put(`/configurations/event/event-image/${id}`, formData);
    }
    onSuccess();
  };

  const optionsType = ["webinar", "on-Site"];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        mutate(
          { ...values },
          {
            onSuccess(resp) {
              handleFileUpload(values.eventImage, resp.data.data.id, () => {
                resetForm();
                toast(`Event ${isUpdate ? "updated" : "Created"}Successfully`);
                router.push("/admin/event");
              });
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
              <Box className="mt-4">
                <Label text="Description" />
                <Input name="description" />
              </Box>
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

export default EventForm;

// import React from "react";

// const EventForm = () => {
//   const initialValues: EventInterface = {
//     id: "",
//     slug: "",
//     name: "",
//     description: "",
//     eventImage: "",
//     startDayTime: "",
//     endDayTime: "",
//     deadLine: "",
//     eventType: "",
//     eventLocation: "",
//     isFeatured: false,
//   };

//   const apiEndPoint = "/configurations/event";
//   const apiEndPointImage = "/configurations/event/event-image";

//   const isWebinar = false;

//   return (
//     <div>
//       <EventWebinarForm
//         initialValues={initialValues}
//         isUpdate={false}
//         apiEndPoint={apiEndPoint}
//         apiEndPointImage={apiEndPointImage}
//         isWebinar={isWebinar}
//       />
//     </div>
//   );
// };

// export default EventForm;
