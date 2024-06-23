import axios from "axios";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import FinanceTeamUserForm from "./components/Finance";
import { columns } from "./columns";

async function getData() {
  const res = await axios.get(`${process.env.BASE_API_URL}/user/finance`);
  return res.data.data;
}
export default async function SalesTeamUser() {
  let data = await getData();
  return (
    <>
      <PageHeader title="Finance Team User's" />
      <DataGrid
        addButton={<FinanceTeamUserForm></FinanceTeamUserForm>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
