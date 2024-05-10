"use client";
import { Button, DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { MetaDataForm } from "components/admin";
import removeTags from "utils/removeTags";
import { CustomCourseInterface } from "interfaces";
import { IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";

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
    renderCell: (params: { row: CustomCourseInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Page Description",
    field: "textarea",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      const textareaValue = params?.row?.textarea;
      return removeTags(textareaValue);
    },
  },
  {
    headerName: "Notes",
    field: "note",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      const noteValue = params.row.notes;
      return removeTags(noteValue);
    },
  },
  {
    headerName: "Duration",
    field: "duration",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Days",
    field: "days",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Info",
    field: "shortInfo",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Fees",
    field: "fees",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      return (
        <>
          <IconButton
            href={`/admin/custom-course-specialization/${params.row.slug}`}
          >
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/course-specialization`}
            refetchUrl="/configurations/course-specialization/custom"
            title={`${params.row.name}`}
            data={params.row.id}
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/course-specialization/custom"
          />
        </>
      );
    },
  },
];

export default function CustomCourseSpecializationPage() {
  let { data } = useGetAll({
    key: "/configurations/course-specialization/custom",
  });
  console.log(data, "<<<<<<<<<<<");

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
