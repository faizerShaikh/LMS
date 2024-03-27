"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "utils";
import PhoneNumberField from "./phoneInpute";
import ToggleButtonForm from "./toggle";

export const WebinarForm = ({ title, eventId }: any) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleToggleChange = (newValue: any) => {
    setSelectedValue(newValue);
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value: any) => {
    setPhoneNumber(value);
  };

  console.log(selectedValue, phoneNumber);

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      degree: "",
      experience: "",
      eventId: eventId,
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required("Required"),
    //   lastName: Yup.string().required("Required"),
    //   mobileNumber: Yup.string().required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    // //   degree: Yup.string().required("Required"),
    //   experience: Yup.string().required("Required"),
    // }),

    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/event-webinar/registration`,
          { ...values, eventId: eventId }
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
      className="border-2  w-[400px] px-4 pb-8 bg-white border-black"
      onSubmit={formik.handleSubmit}
    >
      <p className="font-semibold text-center text-2xl mb-1 mt-4">{title}</p>

      <TextField
        id="firstName"
        label="First Name: "
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
        value={formik.values.firstName}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />

      <TextField
        id="lastName"
        label="Last Name: "
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
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />

      <TextField
        id="email"
        label="Email : "
        variant="outlined"
        margin="normal"
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
      <div className="border py-3 px-4 my-2 mt-4 rounded-md border-gray-400">
        <PhoneNumberField
          id="mobileNumber"
          value={formik.values.mobileNumber}
          onChange={(value: string) =>
            formik.setFieldValue("mobileNumber", value)
          }
        ></PhoneNumberField>
      </div>

      <TextField
        id="experience"
        label="Experience: "
        variant="outlined"
        margin="normal"
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
        value={formik.values.experience}
        error={formik.touched.experience && Boolean(formik.errors.experience)}
        helperText={formik.touched.experience && formik.errors.experience}
      />
      <h2 className="text-lg font-medium">
        Which Degree do you want to persue ?
        <span className="text-red-600">*</span>
      </h2>
      <ToggleButtonForm
        id="degree"
        value={formik.values.degree}
        onToggleChange={(value: string) =>
          formik.setFieldValue("degree", value)
        }
      />
      <p className="text-xs">
        By submitting your info in the form above ,you agree to our{" "}
        <span className="text-blue-700"> Term of Use</span> and{" "}
        <span className="text-blue-700">Privacy Notice.</span> We may use this
        info to contact you and / or use data from third parties to personalize
        your experience.
      </p>
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

{
  /* <TextField
        id="type"
        select
        label="Select years of experience"
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
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
      </TextField> */
}
