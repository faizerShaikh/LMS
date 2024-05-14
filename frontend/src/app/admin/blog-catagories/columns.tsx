"use client";
import { Created_By } from "interfaces/blog";
import { BlogCategoryDialog } from "./_components/BlogCatogariesDialog";
import { DeleteBox } from "components/layout";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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
          <BlogCategoryDialog isUpdate={true} data={params.row} />
          <DeleteBox
            url={`/configurations/blog/blog-category`}
            refetchUrl="/configurations/blog/blog-category"
            title={`Delete ${params.row.name}`}
            data={params.row.id}
          />
        </>
      );
    },
  },
];
