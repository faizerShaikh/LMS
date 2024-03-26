"use client";
import { Button, DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

import removeTags from "utils/removeTags";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";
import { IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";
import { MetaDataForm } from "components/admin";

const columns = [
  {
    headerName: "Title",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: WebinarResponseInterface }) => {
      const nameValue = params.row?.event?.name;
      return nameValue;
    },
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
    renderCell: (params: { row: WebinarResponseInterface }) => {
      const descriptionValue: any = params?.row?.event?.description;
      return removeTags(descriptionValue);
    },
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: WebinarResponseInterface }) => {
      return (
        <>
          <IconButton href={`/admin/webinar/${params?.row?.event?.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/webinar`}
            refetchUrl="/configurations/webinar"
            title={`${params?.row?.event?.name}`}
            data={params.row.id}
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params?.row?.event?.metaID }
            }
            refetchURL="/configurations/webinar"
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
      <DataGrid
        addButton={<Button href="/admin/webinar/add">Add Webinar </Button>}
        columns={columns}
        rows={data}
      />
    </>
  );
}
