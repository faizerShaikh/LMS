"use client";
import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "utils";
import { AutoComplete, Button, Checkbox } from "components/layout";
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
  let courseSpecializationData = [];
  let response = useGetAll({ key: "/configurations/course-specialization" });
  courseSpecializationData = response?.data?.rows;

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const handleSpecializationChange = (e: any) => {
    const selectedSpecialization = e.target.value;
    setSelectedSpecialization(selectedSpecialization);
    formik.setFieldValue("specialization", selectedSpecialization);
  };

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
      course_id: "",
      university_id: "",
      specialization_id: "",
      updatedAt: "",
      createdAt: "",
      dateOfBirth: "",
    },

    onSubmit: (values, { resetForm }) => {
      const selectedSpecializationValue = courseSpecializationData.find(
        (item: any) => item.name === values.specialization
      );

      const selectedUniversityValue = courseSpecializationData.find(
        (item: any) =>
          item.university && item.university.name === values.universityName
      );

      values.specialization_id = selectedSpecializationValue
        ? selectedSpecializationValue.id
        : "";
      values.university_id = selectedUniversityValue
        ? selectedUniversityValue.university.id
        : "";
      values.course_id =
        selectedSpecializationValue && selectedSpecializationValue.course
          ? selectedSpecializationValue.course.id
          : "";
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
      className="border-2  px-12 py-8 bg-white rounded-b-xl border-black w-auto  "
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-wrap justify-between items-center border-b-2  py-8">
        <div className="!w-[48%] mb-3">
          <p className="m-0">
            Full Name <span className="text-red-700">*</span>{" "}
          </p>
          <TextField
            id="fullName"
            // label="FullName: "
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
            className="!w-full mt-1"
          />
        </div>
        <div className="!w-[48%] mb-3">
          <p className="m-0 ">
            Mobile Number <span className="text-red-700">*</span>{" "}
          </p>
          <div className="border py-2 mt-1 px-4 h-[39px]  rounded-md border-gray-300">
            <PhoneNumberField
              id="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={(value: string) =>
                formik.setFieldValue("mobileNumber", value)
              }
              className="h-full w-full"
            ></PhoneNumberField>
          </div>
        </div>

        <div className="!w-[48%] mb-3">
          <p className="m-0">
            Email ID <span className="text-red-700">*</span>{" "}
          </p>
          <TextField
            className="!w-full mt-1"
            id="emailID"
            // label="Email (Only official email) : "
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
        </div>
        <div className="!w-[48%] mb-3">
          <p className="m-0 ">
            Date Of Birth <span className="text-red-700">*</span>{" "}
          </p>
          {/* the date is geting selected and sending through api also but the change is not showing in the ui */}
          <div className="border py-2 mt-1 px-4 h-[39px]  rounded-md border-gray-300">
            <DatePicker
              name="dateOfBirth"
              selected={startDate}
              onChange={(date) => {
                console.log("Selected Date:", date);
                formik.setFieldValue("dateOfBirth", date);
              }}
              className="!w-full"
            />
          </div>
        </div>
        <div className="!w-[48%] mb-3">
          <p className="m-0 ">
            Gender <span className="text-red-700">*</span>{" "}
          </p>
          <TextField
            className="!w-full mt-1"
            id="gender"
            select
            // label="Select Gender"
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
        </div>

        <div className="!w-[48%] mb-3">
          <p className="m-0 ">
            Nationality <span className="text-red-700">*</span>{" "}
          </p>
          <TextField
            className="!w-full mt-1"
            id="nationality"
            select
            // label="Select Nationality"
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
        </div>

        <div className="!w-[48%] mb-3">
          <p className="m-0 ">
            Government Id Type <span className="text-red-700">*</span>{" "}
          </p>
          <TextField
            className="!w-full mt-1"
            id="governmentIDType"
            select
            // label="Select Government Id Type"
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
      </div>

      <div className="!w-full flex flex-wrap justify-between items-center border-b-2 mb-4 py-8">
        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            Country <span className="text-red-700">*</span>{" "}
          </p>
          <div className="!w-full mt-1">
            <CountrySelect
              onChange={(e: any) => {
                setCountryid(e.id);
                formik.setFieldValue("country", e.name);
              }}
              placeHolder="Select Country"
            />
          </div>
        </div>
        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            State <span className="text-red-700">*</span>{" "}
          </p>
          <div className="!w-full mt-1">
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
        </div>

        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            City <span className="text-red-700">*</span>{" "}
          </p>
          <div className="!w-full mt-1">
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e: any) => {
                formik.setFieldValue("city", e.name);
              }}
              placeHolder="Select City"
            />
          </div>
        </div>
        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            How do you know about Riseback{" "}
            <span className="text-red-700">*</span>{" "}
          </p>
          <div className="!w-full mt-1">
            <TextField
              className="m-0"
              id="howDoYouKnowAboutRiseback"
              // label="How do you know about Riseback: "
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
      </div>

      <div className="flex flex-wrap justify-between items-center  mb-4 py-8">
        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            Specialization <span className="text-red-700">*</span>{" "}
          </p>

          <TextField
            className="!w-full mt-1"
            id="specialization"
            select
            // label="Select Course Specialization"
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
            onChange={handleSpecializationChange}
            name="specialization"
            value={selectedSpecialization}
            error={
              formik.touched.specialization &&
              Boolean(formik.errors.specialization)
            }
            helperText={
              formik.touched.specialization && formik.errors.specialization
            }
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {courseSpecializationData &&
              courseSpecializationData.map((item: any) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
          </TextField>
        </div>

        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            Select Course <span className="text-red-700">*</span>{" "}
          </p>

          <TextField
            className="!w-full mt-1"
            id="selectCourse"
            select
            // label="Select Course "
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
            helperText={
              formik.touched.selectCourse && formik.errors.selectCourse
            }
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {courseSpecializationData &&
              courseSpecializationData.map((item: any) => {
                if (item.name === selectedSpecialization && item.course) {
                  return (
                    <MenuItem key={item.id} value={item.course.name}>
                      {item.course.name}
                    </MenuItem>
                  );
                }
                return null;
              })}
          </TextField>
        </div>
        <div className="!w-[48%] mb-4">
          <p className="m-0 ">
            Select University Name <span className="text-red-700">*</span>{" "}
          </p>

          <TextField
            className="!w-full mt-1"
            id="universityName"
            select
            // label="Select University Name "
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
              const selectedUniversity = e.target.value;
              formik.setFieldValue("universityName", selectedUniversity);
            }}
            onBlur={formik.handleBlur}
            name="universityName"
            value={formik.values.universityName}
            error={
              formik.touched.universityName &&
              Boolean(formik.errors.universityName)
            }
            helperText={
              formik.touched.universityName && formik.errors.universityName
            }
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {courseSpecializationData &&
              courseSpecializationData.map((item: any) => {
                if (item.name === selectedSpecialization && item.university) {
                  return (
                    <MenuItem key={item.id} value={item.university.name}>
                      {item.university.name}
                    </MenuItem>
                  );
                }
                return null;
              })}
          </TextField>
        </div>
        <p className="text-red-700">
          <span className="font-semibold ">Disclaimer :</span>
          Application submission does not guarantee admission .Admissionis
          subject to meeting eligibility criteria and seat availability.
        </p>
        <div className="flex">
          <Checkbox></Checkbox>
          <p className="text-xs">
            Yes , I accept to receive promotional news letters or information
            about courses and programs. I accept the Terms of Use and Privacy
            Notice.This site is protected by Google Privacy Policy and Terms of
            Service apply.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className="mt-3 w-[300px] "
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
