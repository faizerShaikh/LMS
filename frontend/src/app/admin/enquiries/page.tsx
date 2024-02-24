"use client";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { PageHeader } from "components/layout";
import React, { useEffect, useState } from "react";




const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Organization",
    field: "organization",
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
    headerName: "Email",
    field: "email",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Type",
    field: "type",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Status",
    field: "status",
    flex: 1,
    cellClassName: "text-dark",
  },
];
export default function EnquiriesPage() {
 

  const [data, setData] = useState([]);
  const getEnquiries = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/enquiry`
    );
    // console.log(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/enquiry`);
    setData(response.data.data.rows)
  };

  useEffect(()=> {
    getEnquiries()
  }, [])
  return (
    <>
      <PageHeader title="Enquiries" />
      
      <DataGrid columns={columns} rows={data} />
    </>
  );
}
