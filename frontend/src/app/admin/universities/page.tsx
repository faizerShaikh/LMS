'use client';
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { UniversityInterface } from "interfaces";
import { UniversityDialog } from "./_components/UniversityDialog";

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
      return <>
        <UniversityDialog isUpdate={true} data={params.row} />
        <DeleteBox url={`/configrations/university`} refetchUrl="/configrations/university" title={`Delete ${params.row.short_name}`} data={params.row.id} />
      </>
    }
  },
]

export default function University() {
  const { data } = useGetAll({
    key: '/configrations/university',
  })
  return <>
    <PageHeader title="Univerities" />
    <DataGrid
      addButton={<UniversityDialog />}
      columns={columns}
      rows={data}
    />
  </>
} 