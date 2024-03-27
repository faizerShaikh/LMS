import React from "react";
import { useFormikContext } from "formik";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function MyRadioButtons({
  name,
  options,
  defaultSelected,
  handleChange = null,
}: any) {
  const { setFieldValue, values } = useFormikContext();

  let _handleChange;
  if (!name) {
    _handleChange = (event: any) => {
      handleChange(event.target.value);
    };
  } else {
    _handleChange = (event: any) => {
      setFieldValue(name, event.target.value);
      handleChange && handleChange(event.target.value);
    };
  }

  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={name ? values[name] : defaultSelected}
      onChange={_handleChange}
    >
      {options.map((option: any) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}
