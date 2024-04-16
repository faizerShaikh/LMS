"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { programmeStructure } from "interfaces";
import { ProgrammeStructureForm } from "./programmeStructureForm";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: programmeStructure }) => {
      return (
        <>
          <ProgrammeStructureForm
            isUpdate={true}
            data={params.row}
            refetchURL={`configurations/program-structures/course-specialization/${params.row.course_specialization_id}`}
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/configurations/program-structures`}
            refetchUrl={`configurations/program-structures/course-specialization/${params.row.course_specialization_id}`}
            title={`${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageProgrammeStructure({ pageId }: any) {
  const { data } = useGetAll({
    key: `configurations/program-structures/course-specialization/${pageId}`,
  });
  return (
    <>
      <DataGrid
        addButton={<ProgrammeStructureForm pageId={pageId} />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
