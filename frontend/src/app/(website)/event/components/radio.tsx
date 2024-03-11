'use client'
import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

export default function MyRadioButtons({ options, defaultSelected } : any) {
  const [selectedValue, setSelectedValue] = React.useState(defaultSelected);

  const handleChange = (event :any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-label="options"
      name="options"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option : any) => (
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
