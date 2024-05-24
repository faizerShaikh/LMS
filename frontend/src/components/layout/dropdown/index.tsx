"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button, ButtonProps } from "@mui/material";

interface DropDownProps {
  buttonText?: string;
  icon?: React.ReactNode;
  buttonProps?: ButtonProps;
  children: React.ReactNode;
}

export function DropDown({
  buttonText,
  icon,
  buttonProps,
  children,
}: DropDownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {icon ? (
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            {...buttonProps}
          >
            {icon}
          </IconButton>
        ) : (
          <Button
            id="basic-button"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            {...buttonProps}
            className={
              "bg-transparent shadow-none text-blue-900 uppercase font-semibold text-base p-0 " +
              (buttonProps && buttonProps?.className
                ? " " + buttonProps?.className
                : "")
            }
          >
            {buttonText}
          </Button>
        )}
        <Menu
          className="w-[147px]"
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              width: "150px",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {children}
        </Menu>
      </Box>
    </React.Fragment>
  );
}
