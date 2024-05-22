"use client";
import { Course } from "interfaces";
import { GridColDef } from "@mui/x-data-grid";
import CourseForm from "./components/CoursesForm";
import { DeleteBox } from "components/layout";

export const columns: GridColDef[] = [
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
    headerName: "Course Level",
    field: "course_level",
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
