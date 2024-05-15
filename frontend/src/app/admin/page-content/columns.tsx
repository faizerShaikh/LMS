"use client";
import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { PageContentInterface } from "interfaces";

export const columns: GridColDef[] = [
  {
    headerName: "Name",
    field: "name",
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
    headerName: "Title Description",
    field: "titleDescription",
    flex: 2,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: PageContentInterface }) => {
      return (
        <>
          <IconButton href={`/admin/page-content/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/page-content"
          />
        </>
      );
    },
  },
];
