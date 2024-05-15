"use client";
import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { DeleteBox } from "components/layout";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";
import removeTags from "utils/removeTags";

export const columns: GridColDef[] = [
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
