"use client";
import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import MyRadioButtons from "./radio";
import { AutoComplete } from "components/layout";
import { Button } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const FilterForm = () => {
  const options = [
    { value: "", label: "All" },
    { value: "webinar", label: "Webinars" },
    { value: "on-Site", label: "On-Site" },
  ];

  // const EventLocationOptions = [
  //   { value: "online", label: "Online" },
  //   { value: "onSite", label: "On-Site" },
  // ];

  const ProgramOption = ["abc", "abc", "abc"];

  const router = useRouter();
  const pathname = usePathname();
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

  function handleClick(value: any) {
    router.push(`/event?${createQueryString("type", value)}`);
  }

  // function handleLocationClick(value: any) {
  //   router.push(`/event?${createQueryString("location", value)}`);
  // }
  return (
    <Formik
      initialValues={{
        eventType: "all",
        eventLocation: "online",
        program: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="w-1/4 shadow-2xl h-fit mb-4 rounded-md p-4 border-2">
          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Types</h2>
            <MyRadioButtons
              name="eventType"
              options={options}
              defaultSelected="all"
              handleChange={handleClick}
            />
          </div>
          {/* 
          <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
            <h2 className="text-xl font-semibold mb-4">Event Location</h2>
            <MyRadioButtons
              name="eventLocation"
              options={EventLocationOptions}
              handleChange={handleLocationClick}
            />
          </div> */}

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Programs</h2>
            <Field name="program">
              {({ field }: any) => (
                <AutoComplete {...field} options={ProgramOption} />
              )}
            </Field>
          </div>

          <Button type="submit" className="bg-blue-900 text-white">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
