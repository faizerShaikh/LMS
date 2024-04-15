import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonForm({ value, onToggleChange }: any) {
  const handleChange = (newValue: any) => {
    onToggleChange(newValue);
  };

  return (
    <>
      <div className="flex">
        <ToggleButtonGroup
          color="primary"
          value={value}
          exclusive
          onChange={(_: any, v: any) => handleChange(v)}
          aria-label="Platform"
        >
          <div className="border border-black rounded-md h-[34px] mr-4">
            <ToggleButton value="masters" className="w-full p-1 rounded-md">
              Masters
            </ToggleButton>
          </div>

          <div className="border border-black h-[34px] rounded-md">
            <ToggleButton value="bachelors" className="p-1 rounded-md">
              Bachelor’s
            </ToggleButton>
          </div>
        </ToggleButtonGroup>
        <p className="font-bold ml-4 mt-1">Courses</p>
      </div>
    </>
  );
}
