"use client";
import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import MyRadioButtons from "./radio";
// import { AutoComplete } from "components/layout";
import { Button } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const FilterForm = () => {
  const options = [
    { value: "", label: "All" },
    { value: "webinar", label: "Webinars" },
    { value: "on-Site", label: "On-Site" },
  ];

  const EventLocationOptions = [
    { value: "online", label: "Online" },
    { value: "onSite", label: "On-Site" },
  ];

  const ProgramOption = ["abc", "abc", "abc"];

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      console.log(params);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  function handleClick(key: string, value: any) {
    router.push(`/event?${createQueryString(key, value)}`);
  }

  function clearFilters() {
    router.push(`/event`);
  }
  return (
    <Formik
      initialValues={{
        type: searchParams.get("type") || "",
        location: searchParams.get("location"),
        program: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form className="w-1/4 shadow-2xl h-fit mb-4 rounded-md p-4 border-2">
          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Types</h2>
            <MyRadioButtons
              name="type"
              options={options}
              handleChange={(value: string) => {
                setFieldValue("type", value);
                handleClick("type", value);
              }}
            />
          </div>

          {/* 
          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Location</h2>
            <MyRadioButtons
              name="location"
              options={EventLocationOptions}
              handleChange={(value: string) => {
                setFieldValue("location", value);
                handleClick("location", value);
              }}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Programs</h2>
            <Field name="program">
              {({ field }: any) => (
                <AutoComplete {...field} options={ProgramOption} />
              )}
            </Field>
          </div> */}

          <Button
            type="button"
            className="bg-blue-900 text-white"
            onClick={() => {
              clearFilters();
              resetForm();
            }}
          >
            Clear Filters
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
