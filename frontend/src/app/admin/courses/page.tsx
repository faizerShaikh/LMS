'use client';
import { DataGrid, PageHeader } from "components/layout";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Duration",
    field: "duration",
    flex: 1,
    cellClassName: "text-dark",
  },
]

export default function Cources() {
  return <>
  <PageHeader title="Cources"/>
  <DataGrid columns={columns} rows={[]}/>
</>
  }
  