"use client";

import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  SxProps,
  Theme,
  FormControlLabelProps,
} from "@mui/material";
import { colors } from "constants/theme";
import React from "react";

interface CheckboxPropTypes
  extends Omit<FormControlLabelProps, "control" | "label" | "sx"> {
  label?: string;
  name?: string;
  checkBoxProps?: CheckboxProps;
  className?: string;
  sx?: SxProps<Theme>;
}

export const Checkbox = ({
  label,
  checkBoxProps,
  className,
  sx,
  ...others
}: CheckboxPropTypes) => {
  return (
    <FormControlLabel
      sx={{
        ...sx,
        "& .MuiTypography-root": {
          fontSize: "inherit",
          color: colors.text.dark,
          padding: "9px",
        },
      }}
      label={label ? label : undefined}
      className={`${className}`}
      {...others}
      control={
        <MuiCheckbox
          sx={{
            color: "#c4c4c4",
          }}
          {...checkBoxProps}
        />
      }
    />
  );
};
