'use client'
import React from 'react'
import MyRadioButtons from './radio'
import { AutoComplete } from 'components/layout'

export const FilterForm = () => {

  const options = [
    { value: "all", label: "All" },
    { value: "webinars", label: "Webinars" },
    { value: "onSite", label: "On-Site" },
  ];

  const EventLocationOptions = [
    { value: "Online", label: "Online" },
    { value: "onSite", label: "On-Site" },
  ];

   const ProgramOption = ["abc", "abc", "abc"];
  return (
    <>
    {({value} : any) => (
    <div className="w-1/4 shadow-2xl mb-4 rounded-md p-4 border-2">
            <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
              <h2 className="text-xl font-semibold mb-4 ">Event Types</h2>
              <MyRadioButtons options={options} defaultSelected="all" />
            </div>

            <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
              <h2 className="text-xl font-semibold mb-4 ">Event Location</h2>
              <MyRadioButtons options={EventLocationOptions} />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 ">Programs</h2>
              {/* <AutoComplete name="program" options={ProgramOption} getOptionLabel={(value: any) => value.name} label='Programs'/> */}
            </div>
          </div>
          )}
          </>
  )
}

