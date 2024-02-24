import { CreateUpdateDialogBaseProps, UniversityInterface } from "interfaces"
import { Button, Dialog, Input, Label } from "../../../../components"
import { Form, Formik } from "formik"
import { useCreateOrUpdate } from "hooks";
import { Box, Grid } from "@mui/material";
import { MetaDataForm } from "../../../../components/admin";
import { MetaDataInitial } from "initials";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";

const initialValues: UniversityInterface = {
    name: "",
    short_name: '',
    description: '',
    university_image: '',
    metaData: MetaDataInitial,
};

export const UniversityDialog = ({ data, isUpdate }: CreateUpdateDialogBaseProps) => {
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useCreateOrUpdate({
        url: isUpdate ? `/configrations/university/${data.id}` : '/configrations/university',
        method: isUpdate ? 'put' : 'post',
    })
    return (
        <Dialog
            button={<Button startIcon={isUpdate ? <Edit /> : <Add />}>{isUpdate ? 'Edit' : 'Add University'}</Button>}
            title="Add University"
        >
            {({ onClose }) => (
                <Formik initialValues={{ ...initialValues, ...data }} onSubmit={(values, { resetForm }) => {
                    mutate(values, {
                        onSuccess(data, variables, context) {
                            console.log('ONS SJSHSSHHS');

                            resetForm();
                            queryClient.refetchQueries(
                                `/configrations/university`,
                                {
                                    exact: false,
                                    stale: true,
                                }
                            );
                            toast(
                                `University ${isUpdate ? "updated" : "added"
                                } successfully`
                            );
                            onClose();
                        },
                    })
                }}>
                    <Form>
                        <Grid container columnSpacing={10} className="mt-8" gap={3}>
                            <Grid xs={12} item>
                                <Box>
                                    <Label text="Title" />
                                    <Input name="name" />
                                </Box>
                                <Box className="mt-4">
                                    <Label text="Short name" />
                                    <Input name="short_name" />
                                </Box>
                                <Box className="mt-4">
                                    <Label text="Description" />
                                    <Input name="description" />
                                </Box>
                                <MetaDataForm />
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
        </Dialog>)
} 