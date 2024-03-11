'use client'
import React from "react";
import { Formik, Form, Field } from "formik";
import MyRadioButtons from "./radio";
import { AutoComplete } from "components/layout";
import { Button } from "@mui/material";

const FilterForm = () => {
   
  const options = [
    { value: "all", label: "All"  },
    { value: "webinars", label: "Webinars" },
    { value: "onSite", label: "On-Site" },
  ];

  const EventLocationOptions = [
    { value: "online", label: "Online" },
    { value: "onSite", label: "On-Site" },
  ];

  const ProgramOption = ["abc", "abc", "abc"];

  return (
    <Formik
      initialValues={{
        eventType: "all",
        eventLocation: "online",
        program: ""
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="w-1/4 shadow-2xl mb-4 rounded-md p-4 border-2">
          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Types</h2>
            <MyRadioButtons name="eventType" options={options} defaultSelected="all" />
          </div>

          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Location</h2>
            <MyRadioButtons name="eventLocation" options={EventLocationOptions} />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Programs</h2>
            <Field name="program">
              {({ field } : any) => (
                <AutoComplete
                  {...field}
                  options={ProgramOption}
                />
              )}
            </Field>
          </div>

          <Button type="submit" className="bg-blue-900 text-white">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
