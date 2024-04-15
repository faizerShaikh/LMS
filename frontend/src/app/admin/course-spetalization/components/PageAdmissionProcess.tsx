"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import {
  AdmissionProcessInterface,
  ProgramHiglightsInterface,
} from "interfaces";
import { AdmissionProcessFrom } from "./AdmissionProcessForm";
import removeTags from "utils/removeTags";

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
    renderCell: (params: { row: AdmissionProcessInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: AdmissionProcessInterface }) => {
      return (
        <>
          <AdmissionProcessFrom
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/admission-process"
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/configurations/admission-process`}
            refetchUrl="/configurations/admission-process"
            title={`${params.row.description}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageAdmissionProcess({ pageId }: any) {
  const { data } = useGetAll({
    key: `/configurations/admission-process/${pageId}`,
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
