"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "utils";

export const EnquiryForm = ({ from }: any) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      organization: "",
      title: "",
      email: "",
      type: "",
      from: from,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      organization: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/enquiry`,
          values
        )
        .then((response) => {
          resetForm();
          toast("Form Submitted Successfull");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <form
      className="border-2 desktop:w-1/2 laptop:w-1/2 tablet:w-auto px-12 py-8 bg-white border-black w-auto mx-8 desktop:mx-0 laptop:mx-0"
      onSubmit={formik.handleSubmit}
    >
      <p className="font-semibold text-lg mt-0 mb-4">
        Please complete and submit the Enquiry form, one of our team member
        would contact you.
      </p>
      <TextField
        id="name"
        label="Name: "
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ": {
            fontSize: 14,
            marginY: -0.7,
          },
          ".MuiInputBase-input ": {
            padding: 1,
          },
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        id="organization"
        label="Organization: "
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ": {
            fontSize: 14,
            marginY: -0.7,
          },
          ".MuiInputBase-input ": {
            padding: 1,
          },
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.organization}
        error={
          formik.touched.organization && Boolean(formik.errors.organization)
        }
        helperText={formik.touched.organization && formik.errors.organization}
      />

      <TextField
        id="title"
        label="Title / Designation: "
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          "&  .MuiFormLabel-root ": {
            fontSize: 14,
            marginY: -0.7,
          },
          ".MuiInputBase-input ": {
            padding: 1,
          },
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />

      <TextField
        id="email"
        label="Email (Only official email) : "
        variant="outlined"
        margin="normal"
        type="email"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ": {
            fontSize: 14,
            marginY: -0.7,
          },
          ".MuiInputBase-input ": {
            padding: 1,
          },
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        id="type"
        select
        label="Type of training"
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ": {
            fontSize: 14,
            marginY: -0.7,
          },
          ".MuiInputBase-input ": {
            padding: 1,
          },
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="type"
        value={formik.values.type}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="online">Online</MenuItem>
        <MenuItem value="university">University</MenuItem>
      </TextField>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        className="mt-3"
      >
        Submit
      </Button>
    </form>
  );
};
