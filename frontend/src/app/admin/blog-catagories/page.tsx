"use client";

import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { Created_By } from "interfaces/blog";
import { BlogCategoryDialog } from "./_components/BlogCatogariesDialog";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: Created_By }) => {
      return (
        <>
         <BlogCategoryDialog isUpdate={true} data={params.row}/>
          <DeleteBox
            url={`/configurations/blog/blog-category`}
            refetchUrl= "/configurations/blog/blog-category"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
  
];

export default function MediaPage() {
  const { data } = useGetAll({ key: "/configurations/blog/blog-category" });
  return (
    <>
      <PageHeader title="Blog's Category" />
      <DataGrid addButton={<BlogCategoryDialog />} columns={columns} rows={data} />
    </>
  );
}
