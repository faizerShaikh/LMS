"use client";
import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { DeleteBox } from "components/layout";
import { GlobalPartnerInterface } from "interfaces/globalPartner";
import removeTags from "utils/removeTags";

export const columns: GridColDef[] = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  // {
  //   headerName: "Vision",
  //   field: "vision",
  //   flex: 1,
  //   cellClassName: "text-dark",
  //   renderCell: (params: { row: GlobalPartnerInterface }) => {
  //     const visionValue = params.row?.vision;
  //     return removeTags(visionValue);
  //   },
  // },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: GlobalPartnerInterface }) => {
      const descriptionValue = params.row?.description;
      return removeTags(descriptionValue);
    },
  },
  // {
  //   headerName: "Objective",
  //   field: "objective",
  //   flex: 1,
  //   cellClassName: "text-dark",
  //   renderCell: (params: { row: GlobalPartnerInterface }) => {
  //     const objectiveValue = params.row?.objective;
  //     return removeTags(objectiveValue);
  //   },
  // },
  // {
  //   headerName: "Popular Course",
  //   field: "popular_course",
  //   flex: 1,
  //   cellClassName: "text-dark",
  // },
  // {
  //   headerName: "Address",
  //   field: "address",
  //   flex: 1,
  //   cellClassName: "text-dark",
  // },
  {
    headerName: "Phone",
    field: "phone",
    flex: 1,
    cellClassName: "text-dark",
  },
  // {
  //   headerName: "Website",
  //   field: "website",
  //   flex: 1,
  //   cellClassName: "text-dark",
  // },
  {
    headerName: "Email",
    field: "email",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: GlobalPartnerInterface }) => {
      return (
        <>
          <IconButton href={`/admin/global-partner/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/global-partner`}
            refetchUrl="/configurations/global-partner"
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
            refetchURL="/configurations/global-partner"
          />
        </>
      );
    },
  },
];
