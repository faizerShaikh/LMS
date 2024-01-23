'use client';
import { DataGrid, PageHeader } from "components/layout";
// import { GridColumns } from "@mui/x-data-grid";


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
]

export default function Faculty() {
    return (<>
        <PageHeader title="Faculty"/>
        <DataGrid
            columns={columns}
            rows={[]}
        />
    </>);
  }
  