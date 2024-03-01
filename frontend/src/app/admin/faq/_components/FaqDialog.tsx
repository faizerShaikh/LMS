import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DropZone,
  Input,
  Label,
} from "../../../../components";
import { FaqInterface, Topics } from "interfaces/faq";
import * as Yup from "yup";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import { Add, IbmWatsonKnowledgeCatalog } from "@carbon/icons-react";
import { Box, Grid, IconButton } from "@mui/material";
import { CreateUpdateDialogBaseProps } from "interfaces";
import { Form, Formik } from "formik";
import { toast } from "utils";

const initialTopicsValues: Topics = {
  topic: "",
  answer: "",
};



const initialValues: FaqInterface = {
  qustion: "",
  orderBy: 0,
  isFetured: false,
  faqTopic: initialTopicsValues,
};
console.log(initialValues)
// const opicValidationSchema = Yup.object({
//   topic: Yup.string().required("Topic Required"),
//   answer: Yup.string().required("Answer Required"),
// });
// const validationSchema = Yup.object({
//   orderBy: Yup.number().required("Order is Required"),
//   isFetured: Yup.boolean().required("Required"),
//   faqTopic: opicValidationSchema.required(),
// });

export const FaqDialog = ({
  data,
  isUpdate,
  refetchURL,
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(null);

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/configurations/faq/${data.id}` : "/configurations/faq",
    method: isUpdate ? "put" : "post",
  });

  return (
    <Dialog
      button={
        isUpdate ?(
        <IconButton className="text-yellow-500">
          <IbmWatsonKnowledgeCatalog />
        </IconButton>
        ):(
            <Button startIcon={<Add />}>Add New FAQ</Button>
        )
      }
      title={"Add FAQ Data"}
    >   
      {({ onClose }) => (
        <Formik
          // validationSchema={{ validationSchema }}
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate({...values,orderBy:+values.orderBy }, {
              onSuccess() {
                resetForm();
                queryClient.refetchQueries(refetchURL, {
                  exact: false,
                  stale: true,
                });
                toast(" successfull");
                onClose();
              },
            });
          }}
        >
          <Form>
            <Grid container>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <Label text="Question" required />
                  <Input name="question" />
                </Grid>
                
                <Grid xs={12} item>
                  <Label text="Order" required />
                  <Input name="orderBy" />
                </Grid>
                <Grid xs={12} item>
                  <Label text="Is Featured" required />
                  <Checkbox name="isFeatured"  />
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

export default FaqDialog;
