import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { columns } from "./columns";
import { LeadsForm } from "./components/LeadsForm";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/leads`
  );
  return res.data.data;
}
export default async function SalesTeamUser() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Sales Team User's" />

      <DataGrid columns={columns} rows={data} />
    </>
  );
}
