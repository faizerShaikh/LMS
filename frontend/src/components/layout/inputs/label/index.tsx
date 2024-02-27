import { InputLabel } from "@mui/material";
import React from "react";

interface LabelProps {
  text: string;
  colorClass?: string;
  className?: string;
  outerClassName?: string;
  required?: boolean;
}

export const Label = ({
  text,
  className,
  colorClass,
  outerClassName,
  required=false,
}: LabelProps) => {
  return (
    <p className={outerClassName ? outerClassName : "my-0"}>
      <InputLabel
        className={`${colorClass ? colorClass : "text-dark"} ${className} `}
      >
        {text}{required ? <span className="text-red-700"> *</span> : ''}
      </InputLabel>
    </p>
  );
};
