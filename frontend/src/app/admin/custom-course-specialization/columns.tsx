"use client";

import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MetaDataForm } from "components/admin";
import { DeleteBox } from "components/layout";
import { CustomCourseInterface } from "interfaces";
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
    renderCell: (params: { row: CustomCourseInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Page Description",
    field: "textarea",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      const textareaValue = params?.row?.textarea;
      return removeTags(textareaValue);
    },
  },
  {
    headerName: "Notes",
    field: "note",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      const noteValue = params.row.notes;
      return removeTags(noteValue);
    },
  },
  {
    headerName: "Duration",
    field: "duration",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Days",
    field: "days",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Info",
    field: "shortInfo",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Fees",
    field: "fees",
    flex: 1,
    cellClassName: "text-dark",
  },

  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: CustomCourseInterface }) => {
      return (
        <>
          <IconButton
            href={`/admin/custom-course-specialization/${params.row.slug}`}
          >
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/course-specialization`}
            refetchUrl="/configurations/course-specialization/custom"
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
            refetchURL="/configurations/course-specialization/custom"
          />
        </>
      );
    },
  },
];
