import axios from "axios";
import { DataGrid } from "components/layout/dataGrid/index";
import { PageHeader } from "components/layout/pageHeader/index";
import { columns } from "./columns";
import { Button } from "components/layout/buttons/button/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/event`
  );
  return res.data.data;
}
export default async function EnquiriesPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Event's" />
      <DataGrid
        addButton={<Button href="/admin/event/add">Add Event </Button>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
