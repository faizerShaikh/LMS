import { Box, Divider, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Button, Input, Label, Dialog } from "../../../../components";
import { Formik, Form, FieldArray } from "formik";
import { faqFormProps } from "interfaces";
import { Add, TrashCan } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { useCreateOrUpdate } from "hooks";
import { toast } from "utils";
import { Topics } from "interfaces/faq";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   faq: Yup.array().of(
//     Yup.object().shape({
//       topic: Yup.string().required("Question is required"),
//       answer: Yup.string().required("Answer is required"),
//       faqId: Yup.number().required(),
//     })
//   ),
// });

export const FaqForm = ({
  data = {},
  isUpdate,
  refetchURL,
  faqId,
}: faqFormProps) => {
  const initialValues: { faq: Topics[] } = {
    faq: [
      {
        topic: "",
        answer: "",
        faqId: faqId,
      },
    ],
  };

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useCreateOrUpdate({
    url: "/configurations/faq-topics/bulkcreate",
    method: "post",
  });

  return (
    <Dialog
      button={
        <IconButton>
          <Add />
        </IconButton>
      }
      title={"Add FAQ Data"}
    >
      {({ onClose }) => (
        <Formik
          // validationSchema={validationSchema}

          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp) {
                resetForm();
                queryClient.refetchQueries(refetchURL, {
                  exact: false,
                  stale: true,
                });
                toast(
                  `FAQ Question ${isUpdate ? "updated" : "added"} successfully`
                );
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
                    name="faq"
                    render={(FieldArrayProp) => {
                      const { push, remove, form } = FieldArrayProp;
                      const { values } = form;
                      const { faq } = values;
                      return (
                        <div>
                          {faq.map((item: any, index: number) => (
                            <div key={index}>
                              <Grid xs={12} item>
                                <Label text="Question" />
                                <Input
                                  name={`faq.${index}.topic`}
                                  className="mb-4"
                                  // label="Question"
                                />
                              </Grid>
                              <Label text="Answer" />
                              <Input
                                name={`faq.${index}.answer`}
                                className="mb-4"
                                // label="Answer"
                              />

                              {index !== faq.length - 1 && (
                                <IconButton
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="text-red-500"
                                >
                                  <TrashCan />
                                </IconButton>
                              )}

                              <Divider className="my-5" />
                              {index === faq.length - 1 && (
                                <IconButton
                                  type="button"
                                  onClick={() =>
                                    push({
                                      topic: "",
                                      answer: "",
                                      faqId: faqId,
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
