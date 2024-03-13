"use client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

import { MetaDataForm } from "components/admin";
import removeTags from "utils/removeTags";
import { WebinarInterface } from "interfaces/webinar";
import { WebinarDialog } from "./_components/WebinarDialog";

const columns = [
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Agenda",
    field: "agenda",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: WebinarInterface }) => {
      const agendaValue = params.row.agenda;
      return removeTags(agendaValue);
    },
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: WebinarInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: WebinarInterface }) => {
      return (
        <>
          <WebinarDialog isUpdate={true} data={params.row} />
          <DeleteBox
            url={`/configurations/webinar`}
            refetchUrl="/configurations/webinar"
            title={`${params.row.title}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function MediaPage() {
  const { data } = useGetAll({ key: "/configurations/webinar" });
  return (
    <>
      <PageHeader title="Wbinar's" />
      <DataGrid addButton={<WebinarDialog />} columns={columns} rows={data} />
    </>
  );
}
