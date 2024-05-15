"use client";

import { GridColDef } from "@mui/x-data-grid";
import { EnquiriesPageInterface } from "interfaces/enquiriesPage";
import { EnquiryDialog } from "./_compunents/EnquiryDialog";
import { DeleteBox } from "components/layout";

export const columns: GridColDef[] = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Organization",
    field: "organization",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Email",
    field: "email",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Type",
    field: "type",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Status",
    field: "status",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Note",
    field: "note",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Source",
    field: "from",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: EnquiriesPageInterface }) => {
      return (
        <>
          <EnquiryDialog
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/enquiry"
          />
          <DeleteBox
            title={`Item`}
            url={`/configurations/enquiry`}
            data={params.row.id}
            refetchUrl="/configurations/enquiry"
          />
        </>
      );
    },
  },
];
