import { DataGrid } from "components/layout/dataGrid/index";
import FaqDialog from "./_components/FaqDialog";
import { columns } from "./columns";
import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";

async function getData() {
  const res = await axios.get(`${process.env.BASE_API_URL}/configurations/faq`);
  return res.data.data;
}
export default async function FaqPage() {
  let data = await getData();
  return (
    <>
      <PageHeader title="FAQ'S" />
      <DataGrid addButton={<FaqDialog />} columns={columns} rows={data} />
    </>
  );
}
