import { CreateUpdateDialogBaseProps, UniversityInterface } from "interfaces"
import { Button, Checkbox, Dialog, Input, Label } from "../../../../components"
import { Form, Formik, useFormik, useFormikContext } from "formik"
import { useCreateOrUpdate } from "hooks";
import { Box, Grid } from "@mui/material";
import { MetaDataForm } from "../../../../components/admin";
import { MetaDataInitial } from "initials";
import { Add, Edit } from "@carbon/icons-react";
import { useQueryClient } from "react-query";
import { toast } from "utils";
import { MediaPressReleaseInterface } from "interfaces/midiaPressRelese";

const initialValues: MediaPressReleaseInterface = {
    title: "",
    link: "",
    description: "",
    isFeatured: false,
    metaData: MetaDataInitial,
};

export const MediaDialog = ({ data, isUpdate }: CreateUpdateDialogBaseProps) => {
    const queryClient = useQueryClient();

    // const { setFieldValue } = useFormikContext()
    const { mutate, isLoading } = useCreateOrUpdate({
        url: isUpdate ? `/configration/press-release/${data.id}` : '/configration/press-release',
        method: isUpdate ? 'put' : 'post',
    })
    return (
        <Dialog
            button={<Button startIcon={isUpdate ? <Edit /> : <Add />}>{isUpdate ? 'Edit' : 'Add Press Release'}</Button>}
            title={isUpdate ? "Edit Press Release" : "Add Press Release"}
        >
            {({ onClose }) => (
                <Formik initialValues={{ ...initialValues, ...data }} onSubmit={(values, { resetForm }) => {
                    mutate(values, {
                        onSuccess(data, variables, context) {
                            resetForm();
                            queryClient.refetchQueries(
                                `/configrations/press-release`,
                                {
                                    exact: false,
                                    stale: true,
                                }
                            );
                            toast(
                                `Press release ${isUpdate ? "updated" : "added"
                                } successfully`
                            );
                            onClose();
                        },
                    })
                }}>
                    <Form>
                        <Grid container columnSpacing={10} className="mt-8" gap={3}>
                            <Grid xs={12} item>
                                {
                                    Object.keys(initialValues).filter((key: string) => (['string', 'boolean'].includes(typeof initialValues[key]))).map((key: string) => {
                                        if (typeof initialValues[key] == 'boolean') {
                                            return (<Box className="mb-4">
                                                <Label text={key.replaceAll('_', '')} className="capitalize" />
                                                <Checkbox name={key} onChange={(event: any) => {  }} />
                                            </Box>)
                                        }
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