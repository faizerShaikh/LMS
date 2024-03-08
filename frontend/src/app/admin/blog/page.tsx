"use client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

import { SingleBlogInterface } from "interfaces/blog";
import { BlogDialog } from "./_components/BlogDialog";
import { MetaDataForm } from "components/admin";
import removeTags from "utils/removeTags";

const columns = [
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
      return <Checkbox {...checkboxProps} />;
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
          <BlogDialog isUpdate={true} data={params.row} />
          <DeleteBox
            url={`/configurations/blog`}
            refetchUrl="/configurations/blog"
            title={`Delete ${params.row.title}`}
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

export default function MediaPage() {
  const { data } = useGetAll({ key: "/configurations/blog" });
  return (
    <>
      <PageHeader title="Blog's" />
      <DataGrid addButton={<BlogDialog />} columns={columns} rows={data} />
    </>
  );
}
