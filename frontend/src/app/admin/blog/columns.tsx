"use client";

import { Edit } from "@carbon/icons-react";
import { IconButton } from "@mui/material";
import { MetaDataForm } from "components/admin";
import { Checkbox, DeleteBox } from "components/layout";
import { SingleBlogInterface } from "interfaces/blog";
import removeTags from "utils/removeTags";

export const columns = [
  {
    headerName: "Title",
    field: "title",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Description",
    field: "description",
    flex: 2,
    cellClassName: "text-dark",
    renderCell: (params: { row: SingleBlogInterface }) => {
      const descriptionValue = params.row.description;
      return removeTags(descriptionValue);
    },
  },
  {
    headerName: "Created By",
    field: `name`,
    flex: 1,
    cellClassName: "text-dark",
    valueGetter: (params: { row: SingleBlogInterface }) => {
      const CreatedByNmae = params.row.created_by?.name;
      return CreatedByNmae;
    },
  },
  {
    headerName: "Is Featured",
    field: "isFeatured",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: SingleBlogInterface }) => {
      const checkboxProps = params.row.is_featured
        ? { disabled: true, checked: true }
        : {};
      return <Checkbox {...checkboxProps} disabled />;
    },
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: SingleBlogInterface }) => {
      return (
        <>
          <IconButton href={`/admin/blog/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <DeleteBox
            url={`/configurations/blog`}
            refetchUrl="/configurations/blog"
            title={`${params.row.title}`}
            data={params.row.id}
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/blog"
          />
        </>
      );
    },
  },
];
