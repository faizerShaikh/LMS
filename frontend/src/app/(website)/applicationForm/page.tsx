import React from "react";
import { RegistrationForm } from "./components/RegistrationForm";

export default function AppicationForm() {
  return (
    <>
      <div className="container m-auto py-14 !w-[1100px] rounded-xl">
        <div className="bg-blue-900 text-white rounded-t-xl text-center py-8 text-3xl font-medium">
          Application Form
        </div>
        <div className="rounded-b-xl">
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </>
  );
}
