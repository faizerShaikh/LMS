import { columns } from "./columns";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { Button } from "components/layout/buttons/button/index";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course-specialization/university`
  );
  console.log(res.data.data);
  return res?.data?.data;
}
export default async function CourseSpecializationPage() {
  const data = await getData();
  return (
    <>
      <PageHeader title="course specialization" />
      <DataGrid
        addButton={
          <Button href="/admin/course-spetalization/add">
            Add course specialization
          </Button>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
