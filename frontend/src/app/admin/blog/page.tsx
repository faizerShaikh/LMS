"use client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

import { SingleBlogInterface } from "interfaces/blog";
import { BlogDialog } from "./_components/BlogDialog";

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
  },
  {
    headerName: "Created By",
    field: "createdBy",
    flex: 1,
    cellClassName: "text-dark",
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
