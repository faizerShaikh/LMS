"use client";
import { DataGrid, PageHeader } from "components/layout";

const columns = [
  {
    headerName: "Full name",
    field: "full_name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Email",
    field: "email",
    flex: 1,
    cellClassName: "text-dark",
  },
];

export default function Students() {
  return (
    <>
      <PageHeader title="Students" />
      <DataGrid columns={columns} rows={[]} />
    </>
  );
}
