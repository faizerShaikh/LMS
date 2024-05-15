import UserCreateForm from "./_components/UsersCreateForm";
import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { columns } from "./columns";

async function getData() {
  const res = await axios.get(`${process.env.BASE_API_URL}/user`);
  return res.data.data;
}
export default async function PageContent() {
  let data = await getData();
  return (
    <>
      <PageHeader title="User's" />

      <DataGrid addButton={<UserCreateForm />} columns={columns} rows={data} />
    </>
  );
}
