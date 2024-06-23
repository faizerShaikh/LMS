import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { columns } from "./columns";
import FacultyForm from "./components/Faculty";

async function getData() {
  const res = await axios.get(`${process.env.BASE_API_URL}/user/faculty`);
  return res.data.data;
}
export default async function SalesTeamUser() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Faculty User's" />

      <DataGrid
        addButton={<FacultyForm></FacultyForm>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
