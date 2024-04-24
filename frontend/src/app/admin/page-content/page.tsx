"use client";
import { DataGrid, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { PageContentInterface } from "interfaces";
import { MetaDataForm } from "components/admin";
import { GalleryForm } from "components/admin/GalleryForm";
import { IconButton } from "@mui/material";
import { Edit } from "@carbon/icons-react";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Title",
    field: "title",
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
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: PageContentInterface }) => {
      return (
        <>
          <IconButton href={`/admin/page-content/${params.row.slug}`}>
            <Edit />
          </IconButton>
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/page-content"
          />
        </>
      );
    },
  },
];

export default function PageContent() {
  const { data } = useGetAll({
    key: "/configurations/page-content",
  });
  // console.log(data, "pagecontent data >>><<<<<<");
  return (
    <>
      <PageHeader title="Page Content" />

      <DataGrid columns={columns} rows={data} />
    </>
  );
}
