"use client";
import axios from "axios";
import { DataGrid, PageHeader } from "components/layout";
import { useEffect, useState } from "react";
import CreateForm from "./component/create";
import Link from "next/link";
import UpdateForm from "./component/update";
const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Title Description",
    field: "titleDescription",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
  },
];

export default function PageContent() {
  const [data, setData] = useState([]);
  const getPageContent = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/page-content`
    );
    setData(response.data.data.rows);
  };
  useEffect(() => {
    getPageContent();
  }, []);

  return (
    <>
      <PageHeader title="Page Content" />
      <div className="flex justify-end">
        <CreateForm></CreateForm>
      </div>
      <DataGrid columns={columns} rows={data}>
        <UpdateForm></UpdateForm>
      </DataGrid>
    </>
  );
}
