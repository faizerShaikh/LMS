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
            <div className="!w-full flex  py-5 px-4 justify-between text-center !bg-gray-100">
              <div>
                <Typography className="text-2xl">
                  <span className="font-bold ">
                    Best offer of the year :{" "}
                    <span className="underline"> Save $200</span>{" "}
                  </span>
                  on a Coursera Plue annual subscription |{" "}
                  <span className="underline font-bold">Get 50% </span> off
                  acess for your team.
                </Typography>
              </div>
              <div className="border border-black">
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
