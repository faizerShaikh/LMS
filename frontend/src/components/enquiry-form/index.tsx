// "use client";
// import axios from "axios";
// import { useState } from "react";

// export const EnquiryForm = () => {
//   const [data, setData] = useState({
//     name: "",
//     organization: "",
//     title: "",
//     email: "",
//     type: "",
//   });

//   const [emailError, setEmailError] = useState("");

//   const handleInput = (event: any) => {
//      const { id, value } = event.target;
//       if (id === "email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
//     }
//     setData({ ...data, [event.target.id]:event.target.value });
//   };

//   function handleSubmit(event: any) {
//     // event.preventDefault();
//     alert("Your Enqury form is submited")
//     if (emailError) {
//       console.log("Invalid form submission");
//       return;
//     }

//     axios
//       .post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/enquiry`,
//         data
//       )
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   }
//   return (
//     <>
//       <div className="flex flex-col w-[500px] text-center">
//         <form
//           action=""
//           onSubmit={handleSubmit}
//           className="border border-black bg-white p-12"
//         >
//           <p className="font-semibold mt-0 mb-4">
//             Please complete and submit the Enquiry form, one of our team member
//             would contact you.
//           </p>
//           {emailError && <p className="text-red-500">{emailError}</p>}
//           <input
//             type="text"
//             placeholder="Name "
//             required
//             id="name"
//             value={data.name}
//             onChange={handleInput}
//             className="w-full mb-4 border-2 rounded-md p-2"
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Organization: "
//             required
//             id="organization"
//             value={data.organization}
//             onChange={handleInput}
//             className="w-full mb-4 border-2 rounded-md p-2"
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Title/Designation: "
//             required
//             id="title"
//             value={data.title}
//             onChange={handleInput}
//             className="w-full mb-4 border-2 rounded-md p-2"
//           />
//           <br />
//           <input
//             type="email"
//             placeholder="Email (only offical email): "
//             required
//             id="email"
//             value={data.email}
//             onChange={handleInput}
//             className={`w-full mb-4 border-2 rounded-md p-2 ${
//               emailError ? "border-red-500" : ""
//             }`}
//           />

//           <br />
//           <select
//             onChange={handleInput}
//             id="type"
//             value={data.type}
//             className="w-full mb-4 border-2 rounded-md p-2"
//           >
//             <option value="" disabled selected hidden>
//               Type of traning
//             </option>
//             <option  value="online">online</option>
//             <option  value="university">university</option>
//           </select>
//           <br />
//           <input
//             type="submit"
//             className="w-full bg-blue-900 text-white py-1 cursor-pointer"
//           />
//         </form>
//       </div>
//     </>
//   );
// };

"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Column, Row } from "@carbon/icons-react";

export const EnquiryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      organization: "",
      title: "",
      email: "",
      type: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      organization: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
    }),
    onSubmit: (values,{resetForm}) => {
      
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/enquiry`,
          values
        )
        .then((response) =>{
          resetForm()
        })
        .catch((err) => console.log(err));

      console.log(values);
    },
  });

  return (
    <form className="border-2  w-[500px] px-12 py-8 bg-white border-black" onSubmit={formik.handleSubmit}>
      <p className="font-semibold text-lg mt-0 mb-4">Please complete and submit the Enquiry form, one of our team member would contact you.</p>
      <TextField
        id="name"
        label="Name: "
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ":{
            fontSize: 14, 
            marginY : -0.7        
          } ,".MuiInputBase-input ":{
            padding : 1
          }
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        id="organization"
        label="Organization: "
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ":{
            fontSize: 14, 
            marginY : -0.7        
          } ,".MuiInputBase-input ":{
            padding : 1
          }
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.organization}
        error={
          formik.touched.organization && Boolean(formik.errors.organization)
        }
        helperText={formik.touched.organization && formik.errors.organization}

      />

      <TextField
        id="title"
        label="Title / Designation: "
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          "&  .MuiFormLabel-root ":{
            fontSize: 14, 
            marginY : -0.7        
          } ,".MuiInputBase-input ":{
            padding : 1
          }
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}

      />

      <TextField
        id="email"
        label="Email (Only official email) : "
        variant="outlined"
        margin="normal"
        type="email"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ":{
            fontSize: 14, 
            marginY : -0.7        
          } ,".MuiInputBase-input ":{
            padding : 1
          }
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        id="type"
        select
        label="Type of training"
        variant="outlined"
        fullWidth
        sx={{
          "&  .MuiFormLabel-root ":{
            fontSize: 14, 
            marginY : -0.7        
          } ,".MuiInputBase-input ":{
            padding : 1
          }
        }}
        margin="normal"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="type"
        value={formik.values.type}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="online">Online</MenuItem>
        <MenuItem value="university">University</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" type="submit" fullWidth className="mt-3">
        Submit
      </Button>
    </form>
  );
};
