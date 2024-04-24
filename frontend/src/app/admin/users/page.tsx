"use client";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { UsersInterface } from "interfaces/users";
import UserCreateForm from "./_components/UsersCreateForm";

const columns = [
  {
    headerName: "Name",
    field: "name",
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
    headerName: "Contact Number",
    field: "contactNumber",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Role",
    field: "role",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: UsersInterface }) => {
      return (
        <>
          <UserCreateForm isUpdate={true} data={params.row}></UserCreateForm>
          <DeleteBox
            url={`/user`}
            refetchUrl="/user"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];

export default function PageContent() {
  const { data } = useGetAll({
    key: "/user",
  });
  return (
    <>
      <PageHeader title="User's" />

      <DataGrid addButton={<UserCreateForm />} columns={columns} rows={data} />
    </>
  );
}
