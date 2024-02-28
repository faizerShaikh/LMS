"use client";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { EnquiriesPageInterface } from "interfaces/enquiriesPage";
import { EnquiryDialog } from "./_compunents/EnquiryDialog";

const columns = [
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
          <EnquiryDialog isUpdate={true} data={params.row} />
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
export default function EnquiriesPage() {
  const { data } = useGetAll({ key: '/configurations/enquiry' })
  return (
    <>
      <PageHeader title="Enquiries" />
      <DataGrid columns={columns} rows={data} />
    </>
  );
}
