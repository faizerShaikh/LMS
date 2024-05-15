import { DataGrid } from "components/layout/dataGrid/index";
import { PageHeader } from "components/layout/pageHeader/index";
import { ExelExport } from "./_compunents/ExelExpoet";
import { columns } from "./columns";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/enquiry`
  );
  return res.data.data;
}
export default async function EnquiriesPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Enquiries" />
      <DataGrid
        addButton={<ExelExport>Download Enquiries</ExelExport>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
