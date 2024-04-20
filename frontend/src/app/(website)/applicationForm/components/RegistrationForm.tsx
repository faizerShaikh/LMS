"use client";
import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "utils";
import { AutoComplete, Button } from "components/layout";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PhoneNumberField from "app/(website)/webinar/_components/pgoneInpute";

import { useGetAll } from "hooks";

export const RegistrationForm = ({ from }: any) => {
  // let courseData = [];
  // let response = useGetAll({ key: "/configurations/course" });
  // courseData = response?.data?.rows;
  // console.log(response);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
      emailID: "",
      gender: "",
      nationality: "",
      governmentIDType: "",
      country: "",
      state: "",
      city: "",
      howDoYouKnowAboutRiseBack: "",
      universityName: "",
      selectCourse: "",
      specialization: "",
      updatedAt: "",
      createdAt: "",
      dateOfBirth: "",
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
    },
  });

  return (
    <form
      className="border-2  px-12 py-8 bg-white border-black w-auto  "
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-wrap gap-5 items-center border-b-2 mb-4 py-8">
        <TextField
          id="fullName"
          label="FullName: "
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
          value={formik.values.fullName}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          className="!w-[48%]"
        />
        <div className="border py-3 !w-[48%] px-4 my-2 mt-4 rounded-md border-gray-400">
          <PhoneNumberField
            id="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={(value: string) =>
              formik.setFieldValue("mobileNumber", value)
            }
          ></PhoneNumberField>
        </div>

        <TextField
          className="!w-[48%]"
          id="emailID"
          label="Email (Only official email) : "
          variant="outlined"
          margin="normal"
          type="emailID"
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
          value={formik.values.emailID}
          error={formik.touched.emailID && Boolean(formik.errors.emailID)}
          helperText={formik.touched.emailID && formik.errors.emailID}
        />
        {/* the date is geting selected and sending through api also but the change is not showing in the ui */}
        <div className="border py-3 !w-[48%] px-4 my-2 mt-4 rounded-md border-gray-400">
          <DatePicker
            name="dateOfBirth"
            selected={startDate}
            onChange={(date) => {
              console.log("Selected Date:", date);
              formik.setFieldValue("dateOfBirth", date);
            }}
          />
        </div>

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
          id="governmentIDType"
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
          name="governmentIDType"
          value={formik.values.governmentIDType}
          error={
            formik.touched.governmentIDType &&
            Boolean(formik.errors.governmentIDType)
          }
          helperText={
            formik.touched.governmentIDType && formik.errors.governmentIDType
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

      <div className="!w-full flex flex-wrap gap-5 items-center border-b-2 mb-4 py-8">
        <div className="!w-[48%]">
          <CountrySelect
            onChange={(e: any) => {
              setCountryid(e.id);
              formik.setFieldValue("country", e.name);
            }}
            placeHolder="Select Country"
          />
        </div>
        <div className="!w-[48%]">
          <StateSelect
            countryid={countryid}
            onChange={(e: any) => {
              setstateid(e.id);
              formik.setFieldValue("state", e.name);
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
              formik.setFieldValue("city", e.name);
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
            name="howDoYouKnowAboutRiseBack"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.howDoYouKnowAboutRiseBack}
            error={
              formik.touched.howDoYouKnowAboutRiseBack &&
              Boolean(formik.errors.howDoYouKnowAboutRiseBack)
            }
            helperText={
              formik.touched.howDoYouKnowAboutRiseBack &&
              formik.errors.howDoYouKnowAboutRiseBack
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 items-center  mb-4 py-8">
        {/* <TextField
          className="!w-[48%]"
          id="gender"
          select
          label="Select Gender"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              fontSize: 14,
              marginY: -0.7,
            },
            "& .MuiInputBase-input": {
              padding: 1,
            },
          }}
          margin="normal"
          onChange={(e) => {
            const selectedCourse = e.target.value;
            formik.setFieldValue("selectCourse", selectedCourse);
          }}
          onBlur={formik.handleBlur}
          name="selectCourse"
          value={formik.values.selectCourse}
          error={
            formik.touched.selectCourse && Boolean(formik.errors.selectCourse)
          }
          helperText={formik.touched.selectCourse && formik.errors.selectCourse}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          {courseData.map((item: any) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </TextField> */}
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
