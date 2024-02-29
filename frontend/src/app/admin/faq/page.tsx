"use client";
import { DataGrid, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

const columns = [
  {
    headerName: "Questions",
    field: "topic",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "answer",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
  },
];

export default function Faq() {
  const { data } = useGetAll({ key: "/configurations/faq" });
  console.log(data, " <===============================data");
  return (
    <>
      <PageHeader title="FAQ'S" />
      <DataGrid columns={columns} rows={[data]} />
    </>
  );
}
