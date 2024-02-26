import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import axios from 'axios'; // Correct import

const initialValues = {
  name: '',
  title: '',
  titleDescription: '',
};

const onSubmit = (values, handleClose, { resetForm }) => {
  axios
    .post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/page-content`,
      values
    )
    .then((response) => {
      resetForm();
    })
    .catch((err) => console.log(err));  

  console.log(values);
  handleClose();
};

const CreateFormWithDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD NEW +
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Form</DialogTitle>
        <DialogContent>
          <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => onSubmit(values, handleClose, { resetForm })}>
            <Form>
              <div>
                <Field
                  name="name"
                  label="Name"
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </div>
              <div>
                <Field
                  name="title"
                  label="Title"
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </div>
              <div>
                <Field
                  name="titleDescription"
                  label="Title Description"
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4}
                />
              </div>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateFormWithDialog;
