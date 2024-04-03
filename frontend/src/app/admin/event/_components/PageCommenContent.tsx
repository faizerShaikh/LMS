"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { CommonContentEventInterface } from "interfaces/event";
import { CommonEventContentForm } from "./CommonEventContentForm";

const columns = [
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "desription",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Order By",
    field: "order",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CommonContentEventInterface }) => {
      return (
        <>
          <CommonEventContentForm
            isUpdate={true}
            data={params.row}
            refetchURL={`configurations/event/event-feature`}
          />
          <DeleteBox
            url={`configurations/event/event-feature`}
            refetchUrl={`configurations/event/event-feature`}
            title={`${params.row.title}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function CommonContentEvent({ id, type }: any) {
  const { data } = useGetAll({
    key: `/configurations/event/event-feature/by-event/${id}?type=${type}`,
  });

  return (
    <>
      <DataGrid
        addButton={<CommonEventContentForm pageId={id} type={type} />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
