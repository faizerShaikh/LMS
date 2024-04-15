"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { ProgramHiglightsInterface } from "interfaces";
import { ProgramingHighlightsForm } from "./ProgramingHighlightsForm";

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
    renderCell: (params: { row: ProgramHiglightsInterface }) => {
      return (
        <>
          <ProgramingHighlightsForm
            isUpdate={true}
            data={params.row}
            refetchURL={`configurations/program-highlights/course-specialization/${params.row.course_specialization_id}`}
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/configurations/program-highlights`}
            refetchUrl={`configurations/program-highlights/course-specialization/${params.row.course_specialization_id}`}
            title={`${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageProgramingHighlights({ pageId }: any) {
  const { data } = useGetAll({
    key: `configurations/program-highlights/course-specialization/${pageId}`,
  });
  return (
    <>
      <DataGrid
        addButton={<ProgramingHighlightsForm pageId={pageId} />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
