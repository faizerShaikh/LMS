"use client";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { UniversityInterface } from "interfaces";
import { UniversityDialog } from "./_components/UniversityDialog";
import { MetaDataForm } from "components/admin";
import removeTags from "utils/removeTags";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Short Name",
    field: "short_name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: UniversityInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "No of Courses",
    field: "no_of_courses",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: UniversityInterface }) => {
      return (
        <>
          <UniversityDialog
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/university"
          />
          <DeleteBox
            title={`Item`}
            url={`/configurations/university`}
            data={params.row.id}
            refetchUrl="/configurations/university"
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/university"
          />
        </>
      );
    },
  },
];

export default function University() {
  const { data } = useGetAll({
    key: "/configurations/university",
  });
  return (
    <>
      <PageHeader title="Univerities" />
      <DataGrid
        addButton={<UniversityDialog />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
