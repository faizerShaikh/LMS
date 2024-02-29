import { Box, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import React from "react";
import { AutoComplete, Button, Input, Label, Select, Dialog } from "..";
import { Formik, Form, FormikContext, useFormikContext } from "formik";
import { MetaDataInitial } from "initials";
import { MetaDatavalidateSchema } from "initials";
import { CreateUpdateDialogBaseProps, MetaDataInterface } from "interfaces";
import { Add, Edit, IbmWatsonKnowledgeCatalog } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import * as Yup from "yup";
import { toast } from "utils";



const initialValues: MetaDataInterface = {
  slug: "",
  keywords: "",
  title: "",
  description: "",
  subject: "",
  copyright: "",
  summary: "",
  classification: "",
  author: "",
  owner: "",
  url: "",
  pageName: "",
  category: "",
  subtitle: "",
  replyTo: "",
  type: "",
  
};
const validationSchema = Yup.object({
  slug: Yup.string().required("Slug is Required"),
  keywords: Yup.string().required("Keywords are Required"),
  title: Yup.string().required("Title is Required"),
  description: Yup.string().required("Description is Required"),
});


 
export const MetaDataForm = ({
  data={},
  isUpdate, 
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
     ?`/configurations/meta-data/${data!.id}`
     : "/configurations/meta-data",
     
    method: isUpdate ? "put" : "post",
  });

  // const { values } = useFormikContext();
  return (
    <Dialog
      button={<IconButton className="text-yellow-500"><IbmWatsonKnowledgeCatalog /></IconButton>}
      title={"Add Meta Data"}
    >
      {({ onClose }) => (
      <Formik
        validationSchema={validationSchema}
        initialValues={{ ...initialValues, ...data }}
        onSubmit={(values, { resetForm }) => {
          mutate(values, {
            onSuccess() {
              resetForm();
              queryClient.refetchQueries(refetchURL, {
                exact: false,
                stale: true,
              });
              toast("Meta Data updated successfully");
              onClose(); 
            },
          });
        }}
      >
        <Form>
          <Grid container>
            
            <Grid container spacing={2}>
              <Grid xs={6} item>
                <Label text="Slug" required/>
                <Input name="slug" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Keywords" required/>
                <Input name="keywords" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Title" required/>
                <Input name="title" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Description" required/>
                <Input name="description" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Subject" />
                <Input name="subject" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Copyright" />
                <Input name="copyright" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Summary" />
                <Input name="summary" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Classification" />
                <Input name="classification" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Author" />
                <Input name="author" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Owner" />
                <Input name="owner" />
              </Grid>
              <Grid xs={6} item>
                <Label text="URL" />
                <Input name="url" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Page Name" />
                <Input name="pageName" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Category" />
                <Input name="category" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Subtitle" />
                <Input name="subtitle" />
              </Grid>
              <Grid xs={6} item>
                <Label text="Reply To" />
                <Input name="replyTo" />
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
              {/* <Grid xs={6} item>
          <Label text="Type" />
          <AutoComplete
            name="metaData.type"
            options={[
              "course",
              "course_specialization",
              "blog",
              "event",
              "gallery",
              "university",
              "page-content",
              "media",
            ]}
          />
        </Grid> */}
            </Grid>
          </Grid>
        </Form>
      </Formik>
      )}
    </Dialog>
  );
};
