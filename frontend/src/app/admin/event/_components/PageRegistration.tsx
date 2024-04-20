"use client";
import { DataGrid, DeleteBox } from "components/layout";
import { useGetAll } from "hooks";
import { EventWebinarRagistrationInterface } from "interfaces/event";
import { EventWebinarRagistrationForm } from "./EventWebinarRagistrationForm";
import { ExelExportRagistrationEnquries } from "./RegistratioEnquriesExport";

const columns = [
  {
    headerName: "First Name",
    field: "firstName",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Last Name",
    field: "lastName",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Email",
    field: "email",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Experience",
    field: "experience",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Mobile Number",
    field: "mobileNumber",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Degree",
    field: "degree",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: EventWebinarRagistrationInterface }) => {
      return (
        <>
          <EventWebinarRagistrationForm data={params.row} />
        </>
      );
    },
  },
];

export default function EventWebinarRagistration({ id }: any) {
  const { data } = useGetAll({
    key: `/configurations/event-webinar/registration/by-event/${id}`,
  });
  console.log(data, "<<<,data");
  return (
    <>
      <DataGrid
        addButton={
          <ExelExportRagistrationEnquries pageId={id}>
            Download Registration Enquiries
          </ExelExportRagistrationEnquries>
        }
        columns={columns}
        rows={data}
      />
    </>
  );
}
