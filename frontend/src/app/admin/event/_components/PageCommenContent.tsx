"use client";
import { DataGrid } from "components/layout";
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
    field: "description",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Order By",
    field: "orderBy",
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
          <CommonEventContentForm data={params.row} />
        </>
      );
    },
  },
];

export default function CommonContentEvent({ id, type }: any) {
  const { data } = useGetAll({
    key: `/configurations/event/event-feature/by-event/:event${id}?type=${type}`,
  });

  return (
    <>
      <DataGrid
        addButton={<CommonEventContentForm />}
        columns={columns}
        rows={data}
      />
    </>
  );
}
