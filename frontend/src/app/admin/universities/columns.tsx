"use client";
import { GridColDef } from "@mui/x-data-grid";
import { UniversityInterface } from "interfaces";
import removeTags from "utils/removeTags";
import { UniversityDialog } from "./_components/UniversityDialog";
import { DeleteBox } from "components/layout";
import { MetaDataForm } from "components/admin";

export const columns: GridColDef[] = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Short Name",
    field: "short_name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: UniversityInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "No of Courses",
    field: "no_of_courses",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: UniversityInterface }) => {
      return (
        <>
          <UniversityDialog
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/university"
          />
          <DeleteBox
            title={`Item`}
            url={`/configurations/university`}
            data={params.row.id}
            refetchUrl="/configurations/university"
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/university"
          />
        </>
      );
    },
  },
];
