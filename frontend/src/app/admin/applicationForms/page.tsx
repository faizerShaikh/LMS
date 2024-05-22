import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { ApplicationFormExelExport } from "./components/ApplicationFormsExelExport";
import { columns } from "./columns";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/application-form`
  );
  return res.data.data.rows;
}
export default async function AppicationFormPage({ id }: any) {
  const data = await getData();

  return (
    <>
      <PageHeader title="Application Form's" />
      <DataGrid
        addButton={
          <ApplicationFormExelExport>
            Download Application Forms
          </ApplicationFormExelExport>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
export const revalidate = 60;
