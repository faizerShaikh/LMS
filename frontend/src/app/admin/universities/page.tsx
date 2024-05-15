import { PageHeader } from "components/layout/pageHeader/index";
import { UniversityDialog } from "./_components/UniversityDialog";
import { columns } from "./columns";
import axios from "axios";
import { DataGrid } from "components/layout/dataGrid/index";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/university`
  );
  return res.data.data;
}
export default async function University() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Univerities" />
      <DataGrid
        addButton={<UniversityDialog />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
