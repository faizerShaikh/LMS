"use client";
import { Paper, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Button } from "../buttons";

const Banner = () => {
  const [show, hide] = React.useState(true);
  const Dismiss = () => {
    hide(!show);
  };
  return (
    <div className="">
      <Fragment>
        {show ? (
          <Paper square elevation={0}>
            <div className="!w-full desktop:flex laptop:flex tablet:flex  py-5 px-4 desktop:justify-between  text-center !bg-gray-100">
              <div>
                <Typography className="desktop:text-2xl">
                  <span className="font-bold ">
                    Best offer of the year :{" "}
                    <span className="underline"> Save $200</span>{" "}
                  </span>
                  on a Coursera Plue annual subscription |{" "}
                  <span className="underline font-bold">Get 50% </span> off
                  acess for your team.
                </Typography>
              </div>
              <div className="border h-[39px] w-[66px] m-auto mt-4 desktop:mt-0 laptop:mt-0 tablet:mt-0 border-black">
                <Button onClick={Dismiss} className="bg-white text-black ">
                  x
                </Button>
              </div>
            </div>
          </Paper>
        ) : null}
      </Fragment>
    </div>
  );
};

export default Banner;
