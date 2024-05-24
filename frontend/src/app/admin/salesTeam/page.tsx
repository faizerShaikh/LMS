import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import SalesTeamUserForm from "./components/SalesTeam";
import { columns } from "./colums";

async function getData() {
  const res = await axios.get(`${process.env.BASE_API_URL}/user/Sales-Team`);
  return res.data.data;
}
export default async function SalesTeamUser() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Sales Team User's" />

      <DataGrid
        addButton={<SalesTeamUserForm></SalesTeamUserForm>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
