import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import { columns } from "./columns";
import { Button } from "components/layout/buttons/button/index";
import axios from "axios";

async function getDate() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course-specialization/custom`
  );
  // console.log(res.data.data, "<<");
  return res.data.data;
}
export default async function CustomCourseSpecializationPage() {
  let data = await getDate();

  return (
    <>
      <PageHeader title="Custom course specialization" />
      <DataGrid
        addButton={
          <Button href="/admin/custom-course-specialization/add">
            Add Custom Course{" "}
          </Button>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
