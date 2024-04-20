import React from "react";
import { RegistrationForm } from "./components/RegistrationForm";

export default function AppicationForm() {
  return (
    <>
      <div className="container m-auto rounded-xl">
        <div className="bg-blue-900 text-white rounded-t-xl text-center py-8 text-3xl font-medium">
          Application Form
        </div>
        <div className="!w-full">
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </>
  );
}
