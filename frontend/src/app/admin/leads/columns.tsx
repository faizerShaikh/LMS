"use client";
import { GridColDef } from "@mui/x-data-grid";
import { LeadsInterface } from "interfaces/applicationForm";
import { LeadsForm } from "./components/LeadsForm";

export const columns: GridColDef[] = [
  {
    headerName: "Srl No",
    field: "srNo",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const srNoValue = params?.row?.applicationForm.srNo;
      return srNoValue;
    },
  },
  {
    headerName: "Full Name",
    field: "fullName",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const fullNameValue = params?.row?.applicationForm.fullName;
      return fullNameValue;
    },
  },
  {
    headerName: "Mobile Number",
    field: "mobileNumber",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const mobileNumberValue = params?.row?.applicationForm.mobileNumber;
      return mobileNumberValue;
    },
  },
  {
    headerName: "Email ID",
    field: "emailID",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const emailIDValue = params?.row?.applicationForm.emailID;
      return emailIDValue;
    },
  },

  {
    headerName: "University Name",
    field: "university",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.applicationForm.university?.name;
      return courseValue;
    },
  },
  {
    headerName: "Select Course",
    field: "course",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.applicationForm.course?.name;
      return courseValue;
    },
  },
  {
    headerName: "Specialization",
    field: "specialization",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.applicationForm.specialization?.name;
      return courseValue;
    },
  },
  {
    headerName: "Status",
    field: "leadStatus",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: LeadsInterface }) => {
      return (
        <>
          <LeadsForm isUpdate={true} data={params.row}></LeadsForm>
        </>
      );
    },
  },
];
