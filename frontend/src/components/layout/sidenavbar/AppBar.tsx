"use client";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { colors, drawerWidth } from "constants/theme";
import React, { useEffect, useState } from "react";
import { MdLogout, MdMenu } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps } from "./types";
import { DropDown } from "../dropdown";
import { BsFillBellFill } from "react-icons/bs";
import { useMemo } from "react";
import { deleteCookie, getCookies } from "cookies-next";
import { getParsedCookie } from "utils/getParsedCookie";
import { usePathname, useRouter } from "next/navigation";

const AppBar = ({ handleDrawerToggle }: AppBarProps) => {
  const { back, replace } = useRouter();
  const pathname = usePathname();

  const user = getParsedCookie<any>("user");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user && user!.name) {
      setUserName(user!.name);
    }
  }, [user]);
  const title = useMemo(
    () =>
      `${pathname
        .replace("/", "")
        .replace(/\/*\[[^\]]*]/g, "")
        .replace(/-/g, " ")
        .replace(/\//g, " /")}`,
    [pathname]
  );

  const logout = () => {
    replace("/");

    Object.keys(getCookies()).forEach((cookie) => {
      deleteCookie(cookie);
    });
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        height: "66px",
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
          lg: `calc(100% - 280px)`,
          xl: `calc(100% - 300px)`,
        },
        ml: {
          sm: `${drawerWidth}px`,
          lg: `calc(100% - 280px)`,
          xl: `calc(100% - 300px)`,
        },
        background: "#fff",
        boxShadow:
          "0px 0.6px 1.8px rgba(0, 0, 0, 0.07), 0px 3.2px 7.2px rgba(0, 0, 0, 0.07)",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MdMenu className="my-auto block" />
        </IconButton>
        <Box className="flex justify-between items-center w-full">
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={colors.text.dark}
            display="flex"
            alignItems="center"
            className="capitalize lg:text-base xl::text-lg"
          >
            <div
              style={{
                background: colors.secondary.light,
              }}
              className="flex justify-center items-center px-2 py-2 rounded-md mr-4 cursor-pointer"
              onClick={back}
            >
              <IoIosArrowBack fill={colors.secondary.dark} />
            </div>
            {title ? <>{title}</> : "dashboard"}
          </Typography>
          <Box className="flex justify-end items-center">
            <IconButton>
              <BsFillBellFill fill={colors.secondary.dark} />
            </IconButton>

            <DropDown
              icon={
                <Avatar
                  sx={{
                    background: colors.secondary.light,
                    color: colors.secondary.dark,
                  }}
                  src={userName}
                  alt={userName}
                ></Avatar>
              }
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={logout}>
                <IconButton size="small" className="mr-1">
                  <MdLogout />
                </IconButton>{" "}
                Logout
              </MenuItem>
            </DropDown>
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
