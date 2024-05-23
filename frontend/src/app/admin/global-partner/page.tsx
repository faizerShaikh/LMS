import { columns } from "./columns";
import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { Button } from "components/layout/buttons/button/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/global-partner`
  );
  return res.data.data;
}
export default async function GlobalPartnerPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="GLOBAL PARTNER'S" />
      <DataGrid
        addButton={
          <Button href="/admin/global-partner/add">ADD GLOBAL PARTNER </Button>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
