"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { AssociationInterface } from "interfaces";
import { AssociationForm } from "./AssociationForm";

const columns = [
  {
    headerName: "Title",
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
            refetchURL={`configurations/associations/course-specialization/${params.row.course_specialization_id}`}
            pageId={params.row?.course_specialization_id}
          />
          <DeleteBox
            url={`/configurations/associations`}
            refetchUrl={`configurations/associations/course-specialization/${params.row.course_specialization_id}`}
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
    key: `configurations/associations/course-specialization/${pageId}`,
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
