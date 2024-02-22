"use client";
import axios from "axios";
import { useState } from "react";

export const EnquiryForm = () => {
  const [data, setData] = useState({
    name: "",
    organization: "",
    title: "",
    email: "",
    type: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleInput = (event: any) => {
     const { id, value } = event.target;
      if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
    }
    setData({ ...data, [event.target.id]:event.target.value });
  };

  function handleSubmit(event: any) {
    // event.preventDefault();
    alert("Your Enqury form is submited")
    if (emailError) {
      console.log("Invalid form submission");
      return;
    }
    
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/enquiry`, 
        data
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="flex flex-col w-[500px] text-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="border border-black bg-white p-12"
        >
          <p className="font-semibold mt-0 mb-4">
            Please complete and submit the Enquiry form, one of our team member
            would contact you.
          </p>
          {emailError && <p className="text-red-500">{emailError}</p>}
          <input
            type="text"
            placeholder="Name "
            required
            id="name"
            value={data.name}
            onChange={handleInput}
            className="w-full mb-4 border-2 rounded-md p-2"
          />
          <br />
          <input
            type="text"
            placeholder="Organization: "
            required
            id="organization"
            value={data.organization}
            onChange={handleInput}
            className="w-full mb-4 border-2 rounded-md p-2"
          />
          <br />
          <input
            type="text"
            placeholder="Title/Designation: "
            required
            id="title"
            value={data.title}
            onChange={handleInput}
            className="w-full mb-4 border-2 rounded-md p-2"
          />
          <br />
          <input
            type="email"
            placeholder="Email (only offical email): "
            required
            id="email"
            value={data.email}
            onChange={handleInput}
            className={`w-full mb-4 border-2 rounded-md p-2 ${
              emailError ? "border-red-500" : ""
            }`}
          />
           
          <br />
          <select
            onChange={handleInput}
            id="type"
            value={data.type}
            className="w-full mb-4 border-2 rounded-md p-2"
          >
            <option value="" disabled selected hidden>
              Type of traning
            </option>
            <option  value="online">online</option>
            <option  value="university">university</option>
          </select>
          <br />
          <input
            type="submit"
            className="w-full bg-blue-900 text-white py-1 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};
