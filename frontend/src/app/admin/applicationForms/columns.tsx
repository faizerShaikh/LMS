"use client";
import { GridColDef } from "@mui/x-data-grid";
import { ApplicaationFormInterface } from "interfaces/applicationForm";
import { ApplicationRegistrationView } from "./components/applicationFormDialog";
import { LeadAssignForm } from "./components/LeadAssignFrom";

export const columns: GridColDef[] = [
  {
    headerName: "Srl No",
    field: "srNo",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Full Name",
    field: "fullName",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Mobile Number",
    field: "mobileNumber",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Email ID",
    field: "emailID",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Country",
    field: "country",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "University Name",
    field: "university",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.university?.name;
      return courseValue;
    },
  },
  {
    headerName: "Select Course",
    field: "course",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.course?.name;
      return courseValue;
    },
  },
  {
    headerName: "Specialization",
    field: "specialization",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const courseValue = params?.row?.specialization?.name;
      return courseValue;
    },
  },
  {
    headerName: "Assigned To",
    field: "assignedTo",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: any }) => {
      const assignedToValue = params?.row?.lead?.assignedUser?.name;
      return assignedToValue;
    },
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: ApplicaationFormInterface }) => {
      return (
        <>
          <ApplicationRegistrationView data={params.row} />
          <LeadAssignForm
            pageId={params.row.id}
            data={params.row}
            // isUpdate={true}
          ></LeadAssignForm>
        </>
      );
    },
  },
];
