"use client";
import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { DeleteBox } from "components/layout";
import { CourseSpecializationInterface } from "interfaces";
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
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Eligibilty",
    field: "eligibilty",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Delivery Mode",
    field: "delivery_mode",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Credits",
    field: "credits",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CourseSpecializationInterface }) => {
      return (
        <>
          <IconButton href={`/admin/course-spetalization/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/course-specialization`}
            refetchUrl="/configurations/course-specialization"
            title={`${params.row.name}`}
            data={params.row.id}
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/course-specialization"
          />
        </>
      );
    },
  },
];
