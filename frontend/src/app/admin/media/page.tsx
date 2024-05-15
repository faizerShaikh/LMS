import { MediaDialog } from "./_components/MediaDialog";
import { columns } from "./columns";
import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/press-release`
  );
  return res.data.data;
}
export default async function MediaPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Press Release" />
      <DataGrid addButton={<MediaDialog />} columns={columns} rows={data} />
    </>
  );
}
