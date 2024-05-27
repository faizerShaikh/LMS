"use client";
import { View, ViewOff } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { Button, Input, Label } from "components/layout";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "hooks";
import { setCookies } from "lib/handel-cookies";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

type Props = {};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading } = useCreateOrUpdate({
    url: `/user/auth/login`,
    method: "post",
  });

  const login = (values: { email: string; password: string }) => {
    mutate(values, {
      onSuccess(data) {
        setCookies("userData", JSON.stringify(data.data.data.user));
        setCookies("token", data.data.data.token);
        router.push("/admin");
      },
    });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        login(values);
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
  );
};

export default LoginForm;
