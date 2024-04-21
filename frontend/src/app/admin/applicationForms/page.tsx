"use client";
import { DataGrid, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

import { ApplicaationFormInterface } from "interfaces/applicationForm";
import { ApplicationRegistrationView } from "./components/applicationFormDialog";
import { ApplicationFormExelExport } from "./components/ApplicationFormsExelExport";

const columns = [
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
    field: "universityName",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Select Course",
    field: "selectCourse",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Specialization",
    field: "specialization",
    flex: 1,
    cellClassName: "text-dark",
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
        </>
      );
    },
  },
];

export default function BlogPage({ id }: any) {
  const { data } = useGetAll({ key: `/configurations/application-form` });
  return (
    <>
      <PageHeader title="Application Forms's" />
      <DataGrid
        addButton={
          <ApplicationFormExelExport>
            Downliad Application Forms
          </ApplicationFormExelExport>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
