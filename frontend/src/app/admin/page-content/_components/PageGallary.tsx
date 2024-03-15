"use client";
import { DataGrid} from "components/layout";
import { useGetAll } from "hooks";
import { GalleryInterface, PageContentInterface } from "interfaces";
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
    field: "description",
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
    renderCell: (params: { row: GalleryInterface }) => {
      return (
        <>
          <GalleryForm1 
           isUpdate={true}
           data={params.row}
           refetchURL={`/configurations/gallery/get-by-page/${params.row.slug}`}
           pageId={params.row?.pageContent?.id || ""}
          />
        </>
      );
    },
  },
];

export default function PageGallery({slug , pageId}:any) {
  const { data } = useGetAll({
    key: `/configurations/gallery/get-by-page/${slug}`,
  });
  console.log(data,"<<<<<<<<<<<<<<<<<<<<<<<<<gallery")

  return (
    <>
      <DataGrid addButton={<GalleryForm1 pageId={pageId}/>}  columns={columns} rows={data} />
    </>
  );
}
