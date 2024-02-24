"use client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { PageHeader } from "components/layout";
import { Field } from "formik";
import React, { useEffect, useState } from "react";

const columns = [
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Media Link",
    field: "link",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Is Featured",
    field: "isFeatured",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: any) => {
        console.log(params.row.isFeatured, params)
      if(params.row.isFeatured === "true") {
        return <Checkbox disabled defaultChecked />;
      } else {
        return <Checkbox  />;
      }
    },
  },
];

export default function MediaPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/configration/press-release`
    );
    setData(response.data.data.rows);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PageHeader title="Media Page" />
      <DataGrid columns={columns} rows={data} />
    </>
  );
}
