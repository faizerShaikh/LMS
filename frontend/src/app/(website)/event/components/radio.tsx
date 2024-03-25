import React from "react";
import { useFormikContext } from "formik";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function MyRadioButtons({
  name,
  options,
  defaultSelected,
  handleChange = null,
}: any) {
  const { setFieldValue } = useFormikContext();
  const [selectedValue, setSelectedValue] = React.useState(defaultSelected);

  React.useEffect(() => {
    setFieldValue(name, selectedValue);
  }, [name, selectedValue, setFieldValue]);

  let _handleChange;
  if (!handleChange) {
    _handleChange = (event: any) => {
      setSelectedValue(event.target.value);
    };
  } else {
    _handleChange = (event: any) => {
      handleChange(event.target.value);
      setSelectedValue(event.target.value);
    };
  }

  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={selectedValue}
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
