"use client";
import { GridColDef } from "@mui/x-data-grid";
import { SalesTeamInterface } from "interfaces/users";
import { DeleteBox } from "components/layout";
import SalesTeamUserForm from "./components/SalesTeam";

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
    renderCell: (params: { row: SalesTeamInterface }) => {
      return (
        <>
          <SalesTeamUserForm
            isUpdate={true}
            data={params.row}
            refetchURL="/salesTeam"
          ></SalesTeamUserForm>
          <DeleteBox
            url={`/user`}
            refetchUrl="/salesTeam"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];
