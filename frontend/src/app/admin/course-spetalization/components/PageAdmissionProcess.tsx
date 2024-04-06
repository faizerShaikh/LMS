"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { ProgramHiglightsInterface } from "interfaces";
import { AdmissionProcessFrom } from "./AdmissionProcessForm";

const columns = [
  {
    headerName: "Title",
    field: "title",
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
    renderCell: (params: { row: ProgramHiglightsInterface }) => {
      return (
        <>
          <AdmissionProcessFrom
            isUpdate={true}
            data={params.row}
            refetchURL="/course-specialization/admission-process"
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/course-specialization/admission-process`}
            refetchUrl="/course-specialization/admission-process"
            title={`${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageAdmissionProcess({ pageId }: any) {
  const { data } = useGetAll({
    key: `/course-specialization/admission-process`,
  });

  return (
    <>
      <DataGrid
        addButton={<AdmissionProcessFrom pageId={pageId} />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
