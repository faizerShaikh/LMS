"use client";
import { DataGrid} from "components/layout";
import { useGetAll } from "hooks";
import { PageContentInterface } from "interfaces";
import {  GalleryForm1 } from "./GalleryForm";


const columns = [
  {
    headerName: "Name",
    field: "name",
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
    headerName: "Order By",
    field: "orderBy",
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
          <GalleryForm1 
          isUpdate={true}
          data = {
            params.row.gallery
          }
          pageId={params.row.id || ""}
          />
        </>
      );
    },
  },
];

export default function PageContent(slug: string) {
  const { data } = useGetAll({
    key: `/configurations/gallery/get-by-page/${slug}`,
  });

  return (
    <>

      <DataGrid columns={columns} rows={data} />
    </>
  );
}
