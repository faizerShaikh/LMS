"use client";
import { Button, DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { MetaDataForm } from "components/admin";
import removeTags from "utils/removeTags";
import { IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";
import { CourseSpecializationInterface } from "interfaces";

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
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Page Description",
    field: "textarea",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      const textareaValue = params?.row?.textarea;
      return removeTags(textareaValue);
    },
  },
  {
    headerName: "Notes",
    field: "note",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CourseSpecializationInterface }) => {
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
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      return (
        <>
          <IconButton href={`/admin/course-spetalization/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/course-specialization`}
            refetchUrl="/configurations/course-specialization"
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
            refetchURL="/configurations/course-specialization"
          />
        </>
      );
    },
  },
];

export default function CourseSpecializationPage() {
  let { data } = useGetAll({ key: "/configurations/course-specialization" });

  return (
    <>
      <PageHeader title="course specialization" />
      <DataGrid
        addButton={
          <Button href="/admin/course-spetalization/add">
            Add custom course specialization
          </Button>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
