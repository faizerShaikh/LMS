'use client';

import { DataGrid, PageHeader } from "components/layout";

const columns = [
    {
      headerName: "Name",
      field: "Name",
      flex: 1,
      cellClassName: "text-dark",
    },
    {
      headerName: "Location",
      field: "location",
      flex: 1,
      cellClassName: "text-dark",
    },
]

export default function University(){
    return <>
        <PageHeader title="Univerities"/>
        <DataGrid columns={columns} rows={[]}/>
    </>
} 