import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { BlogCategoryDialog } from "./_components/BlogCatogariesDialog";
import { columns } from "./columns";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/blog/blog-category`
  );
  return res.data.data.rows;
}
export default async function MediaPage() {
  const data = await getData();
  return (
    <>
      <PageHeader title="Blog's Category" />
      <DataGrid
        addButton={<BlogCategoryDialog />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
