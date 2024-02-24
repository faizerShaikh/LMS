import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Input, Label } from '..'

export const MetaDataForm = () => {
    return (
        <Grid container>
            <Grid xs={12} item>
                <Typography >
                    Meta Data Information
                </Typography>
            </Grid>
            <Grid container>
                <Grid xs={6} item className="mt-4">
                    <Label text="slug" />
                    <Input name="metaData.slug" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="Keywords" />
                    <Input name="metaData.keywords" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="str" />
                    <Input name="metaData.str" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="description" />
                    <Input name="metaData.description" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="subject" />
                    <Input name="metaData.subject" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="copyright" />
                    <Input name="metaData.copyright" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="summary" />
                    <Input name="metaData.summary" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="classification" />
                    <Input name="metaData.classification" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="author" />
                    <Input name="metaData.author" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="owner" />
                    <Input name="metaData.owner" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="url" />
                    <Input name="metaData.url" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="pageName" />
                    <Input name="metaData.pageName" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="category" />
                    <Input name="metaData.category" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="subtitle" />
                    <Input name="metaData.subtitle" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="replyTo" />
                    <Input name="metaData.replyTo" />
                </Grid>
                <Grid xs={6} item className="mt-4">
                    <Label text="type" />
                    <Input name="metaData.type" />
                </Grid>

            </Grid>
        </Grid>
    )
}
