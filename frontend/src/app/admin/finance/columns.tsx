"use client";
import { GridColDef } from "@mui/x-data-grid";
import { UsersInterface } from "interfaces/users";
import { DeleteBox } from "components/layout";
import FinanceTeamUserForm from "./components/Finance";

export const columns: GridColDef[] = [
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
          <FinanceTeamUserForm
            isUpdate={true}
            data={params.row}
            refetchURL="/finance"
          ></FinanceTeamUserForm>
          <DeleteBox
            url={`/user`}
            refetchUrl="/finance"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];
