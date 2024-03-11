"use client";

import React, { ReactElement, useState } from "react";
import {
  Button,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  Grid,
} from "@mui/material";

interface ButtonGroupProps extends MuiButtonGroupProps {
  buttons: {
    text: string;
    key: string;
    clickHandler?: () => void;
  }[];
  buttonClasses?: string;
  // children: ReactElement | ReactElement[];
}
export const ButtonGroup = ({
  buttons,
  // children,
  buttonClasses = "",
  ...otherProps
}: ButtonGroupProps) => {
  const [selectedKey, setSelectedKey] = useState(buttons[0]?.key);
  // console.log(children);

  console.log(selectedKey, "selectedKeyselectedKey");
  return (
    <Grid container>
      <Grid item xs={12} className="flex items-center justify-center">
        <MuiButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          {...otherProps}
        >
          {buttons.map((item) => (
            <Button
              variant={item.key === selectedKey ? "contained" : "outlined"}
              sx={{ boxShadow: "none" }}
              key={item.key}
              className={buttonClasses ? buttonClasses : ""}
              onClick={
                item.clickHandler
                  ? () => {
                      if (item.clickHandler) {
                        item.clickHandler();
                      }
                      setSelectedKey(item.key);
                    }
                  : () => setSelectedKey(item.key)
              }
            >
              {item.text}
            </Button>
          ))}
        </MuiButtonGroup>
      </Grid>
      {/* <Grid item xs={12}>
        {children && Array.isArray(children)
          ? children?.map(
              (item: ReactElement) => item?.key === selectedKey && item
            )
          : children}
      </Grid> */}
    </Grid>
  );
};
