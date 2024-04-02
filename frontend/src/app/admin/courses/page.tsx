"use client";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { Course } from "interfaces";
import CourseForm from "./components/CoursesForm";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: Course }) => {
      return (
        <>
          <CourseForm
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/course"
          />
          <DeleteBox
            url={`/configurations/course`}
            refetchUrl="/configurations/course"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function Cources() {
  const { data } = useGetAll({ key: "configurations/course" });
  return (
    <>
      <PageHeader title="Cources" />
      <DataGrid addButton={<CourseForm />} columns={columns} rows={data} />
    </>
  );
}
