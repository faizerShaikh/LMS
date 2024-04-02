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
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      return (
        <>
          <IconButton href={`/admin/course-specialization/${params.row.slug}`}>
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

export default function MediaPage() {
  const { data } = useGetAll({ key: "/configurations/course-specialization" });
  return (
    <>
      <PageHeader title="course specialization" />
      <DataGrid
        addButton={
          <Button href="/admin/course-specialization/add">
            Add course specialization
          </Button>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
