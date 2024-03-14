import { CreateUpdateDialogBaseProps, UniversityInterface } from "interfaces";
import { Button, Dialog, DropZone, Input, Label } from "../../../../components";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { Box, Grid, IconButton } from "@mui/material";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import * as Yup from "yup";
import { API } from "configs";

const initialValues: UniversityInterface = {
  slug: "",
  name: "",
  short_name: "",
  description: "",
  university_image: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  short_name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  
});

export const UniversityDialog = ({
  data,
  isUpdate,
  refetchURL
}: CreateUpdateDialogBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate
      ? `/configurations/university/${data.id}`
      : "/configurations/university",
    method: isUpdate ? "put" : "post",
  });

 

  const handleFileUpload = async (
    file: File,
    id: string,
    onSuccess: VoidFunction
  ) => {
    const formData = new FormData();
    formData.append("university_image", file);
    await API.put(`configurations/university/university-image/${id}`, formData);
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
          <Button startIcon={<Add />}>Add University</Button>
        )
      }
      title={isUpdate ? "Edit University" : "Add University"}
    >
      {({ onClose }) => (
        <Formik
          validationSchema={validationSchema}
          initialValues={{ ...initialValues, ...data }}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess(resp, variables, context) {
                handleFileUpload(
                  values.university_image,
                  resp.data.data.id,
                  () => {
                    resetForm();
                    queryClient.refetchQueries(refetchURL, {
                      exact: false,
                      stale: true,
                    });
                    toast(
                      `University ${
                        isUpdate ? "updated" : "added"
                      } successfully`
                    );
                    onClose();
                  }
                );
              },
            });
          }}
        >
          {({values})=> (
            <Form>
            <Grid container columnSpacing={10} className="mt-2  " gap={3}>
              <Grid xs={12} item>
                <Box>
                  {/* {values?.university_image && <Image width={150} height={150} alt="tr" src={URL.createObjectURL(values?.university_image)} className="flex justify-center" ></Image>} */}
                  <Label text="Upload your image" required/>
                  <DropZone name="university_image"/>
                </Box>
                <Box>   
                  <Label text="Title" required  className="mt-4"/>
                  <Input name="name" />
                </Box>
                <Box>   
                  <Label text="Slug" required  className="mt-4"/>
                  <Input name="slug" />
                </Box>
                <Box className="mt-4">
                  <Label text="Short name" required/>
                  <Input name="short_name" />
                </Box>
                <Box className="mt-4">
                  <Label text="Description" required/>
                  <Input name="description" />
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
