"use client";
import { DataGrid, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { PageContentInterface } from "interfaces";
import { PageContentDialog } from "./_components/PageContentDialog";
import { MetaDataForm } from "components/admin";
import { GalleryForm } from "components/admin/GalleryForm";
import { log } from "console";

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
      console.log('ddd', params.row.gallery)
      return (
        <>
          <PageContentDialog
            isUpdate={true}
            data={params.row}
            refetchURL="/configurations/page-content"
          />
          <MetaDataForm
            isUpdate={true}
            data={
              params.row.metaData
                ? params.row.metaData
                : { id: params.row.metaID }
            }
            refetchURL="/configurations/page-content"
          />
          <GalleryForm
            isUpdate={true}
            data={{gallery:  params.row.gallery}}
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

  return (
    <>
      <PageHeader title="Page Content" />

      <DataGrid columns={columns} rows={data} />
    </>
  );
}
