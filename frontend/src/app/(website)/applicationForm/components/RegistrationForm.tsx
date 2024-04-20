"use client";
import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "utils";
import { Button } from "components/layout";

import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export const RegistrationForm = ({ from }: any) => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      governmentIdType: "",
      country: "",
      state: "",
      city: "",
      howDoYouKnowAboutRiseback: "",
      universityName: "",
      selectCourse: "",
      specialization: "",
    },

    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/application-form`,
          values
        )

        .then((response) => {
          resetForm();
          toast("Form Submitted Successfull");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values, "<<<<<<<<<<<<<<values");
    },
  });

  return (
    <form
      className="border-2  px-12 py-8 bg-white border-black w-auto  "
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-wrap gap-5 border-b-2 mb-4 py-8">
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
          className="!w-[48%]"
        />

        <TextField
          className="!w-[48%]"
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
          className="!w-[48%]"
          id="gender"
          select
          label="Select Gender"
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
          name="gender"
          value={formik.values.gender}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>

        <TextField
          className="!w-[48%]"
          id="nationality"
          select
          label="Select Nationality"
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
          name="nationality"
          value={formik.values.nationality}
          error={
            formik.touched.nationality && Boolean(formik.errors.nationality)
          }
          helperText={formik.touched.nationality && formik.errors.nationality}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="Indian">Indian</MenuItem>
          <MenuItem value="Other Country">Other Country</MenuItem>
        </TextField>

        <TextField
          className="!w-[48%]"
          id="governmentIdType"
          select
          label="Select Government Id Type"
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
          name="governmentIdType"
          value={formik.values.governmentIdType}
          error={
            formik.touched.governmentIdType &&
            Boolean(formik.errors.governmentIdType)
          }
          helperText={
            formik.touched.governmentIdType && formik.errors.governmentIdType
          }
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="Pan Card">Pan Card</MenuItem>
          <MenuItem value="Adhar Card">Adhar Card</MenuItem>
          <MenuItem value="Voter Id Card">Voter Id Card</MenuItem>
        </TextField>
      </div>

      <div className="!w-full flex flex-wrap gap-5 items-center">
        <div className="!w-[48%]">
          <CountrySelect
            onChange={(e: any) => {
              setCountryid(e.id);
              formik.setFieldValue("country", e.name); // Update formik value for country
              console.log(e.name, "<<<<<<<<name");
            }}
            placeHolder="Select Country"
          />
        </div>
        <div className="!w-[48%]">
          <StateSelect
            countryid={countryid}
            onChange={(e: any) => {
              setstateid(e.id);
              formik.setFieldValue("state", e.name); // Update formik value for state
            }}
            name="state"
            placeHolder="Select State"
          />
        </div>
        <div className="!w-[48%]">
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e: any) => {
              formik.setFieldValue("city", e.name); // Update formik value for city
              console.log(e);
            }}
            placeHolder="Select City"
          />
        </div>
        <div className="!w-[48%]">
          <TextField
            id="howDoYouKnowAboutRiseback"
            label="How do you know about Riseback: "
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
            name="howDoYouKnowAboutRiseback"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.howDoYouKnowAboutRiseback}
            error={
              formik.touched.howDoYouKnowAboutRiseback &&
              Boolean(formik.errors.howDoYouKnowAboutRiseback)
            }
            helperText={
              formik.touched.howDoYouKnowAboutRiseback &&
              formik.errors.howDoYouKnowAboutRiseback
            }
          />
        </div>
      </div>

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
