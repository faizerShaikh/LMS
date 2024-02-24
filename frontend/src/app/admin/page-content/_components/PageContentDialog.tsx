import { CreateUpdateDialogBaseProps, PageContentInterface } from "interfaces"
import { Button, Dialog, Input, Label } from "../../../../components"
import { Form, Formik } from "formik"
import { useCreateOrUpdate } from "hooks";
import { Box, Grid } from "@mui/material";
import { MetaDataForm } from "../../../../components/admin";
import { MetaDataInitial } from "initials";
import { Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";

const initialValues: PageContentInterface = {
    name: "",
    title: '',
    titleDescription: '',
    pageDescription: '',
    coverImage: null,
    gallery: [],
    metaData: MetaDataInitial,
};

export const PageContentDialog = ({ data, isUpdate = true }: CreateUpdateDialogBaseProps) => {
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useCreateOrUpdate({
        url: `/configrations/page-content/${data.id}`,
        method: 'put',
    })
    return (
        <Dialog
            button={<Button startIcon={<Edit />}>Edit</Button>}
            title="Edit Page Content"
        >
            {({ onClose }) => (
                <Formik initialValues={{ ...initialValues, ...data }} onSubmit={(values, { resetForm }) => {
                    mutate(values, {
                        onSuccess(data, variables, context) {
                            console.log('ONS SJSHSSHHS');

                            resetForm();
                            queryClient.refetchQueries(
                                `/configrations/page-content`,
                                {
                                    exact: false,
                                    stale: true,
                                }
                            );
                            toast(
                                `Page content updated successfully`
                            );
                            onClose();
                        },
                    })
                }}>
                    <Form>
                        <Grid container columnSpacing={10} className="mt-8" gap={3}>
                            <Grid xs={12} item>
                                {
                                    Object.keys(initialValues).filter((key: string) => (typeof initialValues[key] == 'string')).map((key: string) => {
                                        return (
                                            <Box className="mb-4">
                                                <Label text={key.replaceAll('_', '')} className="capitalize" />
                                                <Input name={key} />
                                            </Box>)
                                    })
                                }
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