'use client'
import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function MyRadioButtons({ options, defaultSelected } : any) {
  const [selectedValue, setSelectedValue] = React.useState(defaultSelected);

  const handleChange = (event :any) => {
    setSelectedValue(event.target.value);
  };
  // const router = useRouter();
  // const handleClick = (values : string) => {
  //     router.push(`/event?key=${values}`)
  // }

  return (
    <RadioGroup
      aria-label="options"
      name="options"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option : any) => (
        <FormControlLabel
        // onClick={() => handleClick(option.value)}
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}
