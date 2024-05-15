"use client";
import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { Checkbox, DeleteBox } from "components/layout";
import { EventInterface } from "interfaces/event";
import moment from "moment";
import removeTags from "utils/removeTags";

export const columns: GridColDef[] = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      const descriptionValue = params.row?.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Start Day Time",
    field: "startDayTime",
    flex: 1.5,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      moment.locale("en");
      let startDayTimeValue = params.row.startDayTime;
      return moment(startDayTimeValue).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  {
    headerName: "End Day Time",
    field: "endDayTime",
    flex: 1.5,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      moment.locale("en");
      let endDayTimeValue = params.row.endDayTime;
      return moment(endDayTimeValue).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  {
    headerName: "DeadLine",
    field: "deadLine",
    flex: 1.5,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      moment.locale("en");
      let deadLineValue = params.row.deadLine;
      return moment(deadLineValue).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  {
    headerName: "Event Type",
    field: "eventType",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Event Location",
    field: "eventLocation",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Is Featured",
    field: "isFeatured",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      const checkboxProps = params.row.isFeatured
        ? { disabled: true, checked: true }
        : {};
      return <Checkbox {...checkboxProps} />;
    },
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventInterface }) => {
      return (
        <>
          <IconButton href={`/admin/event/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/event`}
            refetchUrl="/configurations/event"
            title={`${params.row.name}`}
            data={params.row.id}
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaId }
            }
            refetchURL="/configurations/event"
          />
        </>
      );
    },
  },
];