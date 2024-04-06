"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { AssociationInterface } from "interfaces";
import { AdmissionProcessFrom } from "./AdmissionProcessForm";
import { AssociationForm } from "./AssociationForm";

const columns = [
  {
    headerName: "TiTle",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Sub Title",
    field: "subTitle",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: AssociationInterface }) => {
      return (
        <>
          <AssociationForm
            isUpdate={true}
            data={params.row}
            refetchURL="/course-specialization/associations"
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/course-specialization/associations`}
            refetchUrl="/course-specialization/associations"
            title={`${params.row.title}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageAssociation({ pageId }: any) {
  const { data } = useGetAll({
    key: `/course-specialization/associations`,
  });
  return (
    <>
      <DataGrid
        addButton={<AssociationForm pageId={pageId} />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
