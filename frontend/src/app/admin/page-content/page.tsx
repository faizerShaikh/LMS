import { PageHeader } from "components/layout/pageHeader/index";
import { columns } from "./columns";
import axios from "axios";
import { DataGrid } from "components/layout/dataGrid/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/page-content`
  );
  return res.data.data;
}
export default async function PageContent() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Page Content" />

      <DataGrid columns={columns} rows={data} />
    </>
  );
}
