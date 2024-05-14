import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { useGetAll } from "hooks";
import { columns } from "./columns";
import { Button } from "components/layout/buttons/index";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/blog`
  );
  return res.data.data.rows;
}
export default async function BlogPage() {
  const data = await getData();
  return (
    <>
      <PageHeader title="Blog's" />
      <DataGrid
        addButton={<Button href="/admin/blog/add">Add Blog</Button>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
