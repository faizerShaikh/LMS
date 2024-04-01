"use client";
import { View, ViewOff } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import axios from "axios";
import { Button, Input, Label } from "components/layout";
import { error } from "console";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "utils";
import * as Yup from "yup";

function loginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center bg-white overflow-hidden">
      <div className="w-1/2 h-svh">
        <Image
          src={"/img2/rut-miit-oTglG1D4hRA-unsplash.jpg"}
          width={1000}
          height={1000}
          alt="image"
          className="w-[100%] h-full object-fill relative"
        />
        <div className="absolute top-[80%] translate-x-14 backdrop-blur-lg px-16 py-6 rounded-2xl">
          <div>
            <p className="text-white mx-auto">
              Gather confidential and anonymous feedback at the click of a
              button
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-1/2">
          <div className=" flex flex-col items-center justify-center">
            <div className="border-b border-yellow-500 w-full flex justify-center">
              <Image
                src={"/img2/Riseback logo.png"}
                width={300}
                height={150}
                alt="RiseBack Logo"
              ></Image>
            </div>
            <h2 className="font-semibold text-xl leading-7 uppercase">
              Admin Login Page
            </h2>
          </div>
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/auth/login`,
                    values
                  )
                  .then((response) => {
                    resetForm();
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <Form>
                <div className="mb-4">
                  <Label text="Email" className="text-base mb-1" />
                  <Input
                    type="email"
                    name="email"
                    className="bg-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <Label text="Password" className="text-base mb-1" />
                  <div className="relative w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="bg-white"
                      placeholder="Enter your password"
                    />
                    <IconButton
                      className="absolute  right-0 pt-2 top-2/4  -translate-y-2/4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOff /> : <View />}
                    </IconButton>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-8">
                  Sign In
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
