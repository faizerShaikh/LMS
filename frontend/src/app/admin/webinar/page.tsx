import axios from "axios";
import { columns } from "./columns";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { Button } from "components/layout/buttons/button/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/webinar`
  );
  console.log(res.data.data.rows);
  return res.data.data;
}
export default async function MediaPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Wbinar's" />
      <DataGrid
        addButton={<Button href="/admin/webinar/add">Add Webinar </Button>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
