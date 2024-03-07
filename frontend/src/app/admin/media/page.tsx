"use client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { MediaPressReleaseInterface } from "interfaces/midiaPressRelese";
import { MediaDialog } from "./_components/MediaDialog";
import { MetaDataForm } from "components/admin";

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
    headerName: "Media Link",
    field: "link",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Is Featured",
    field: "isFeatured",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: MediaPressReleaseInterface }) => {
      const checkboxProps = params.row.isFeatured
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
    renderCell: (params: { row: MediaPressReleaseInterface }) => {
      return (
        <>
          <MediaDialog isUpdate={true} data={params.row} />
          <DeleteBox
            url={`/configurations/press-release`}
            refetchUrl="/configurations/press-release"
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
            refetchURL="/configurations/press-release"
          />
        </>
      );
    },
  },
];

export default function MediaPage() {
  const { data } = useGetAll({ key: "/configurations/press-release" });
  // console.log(data, "<==================ahsdfjhasvfjh")
  return (
    <>
      <PageHeader title="Press Release" />
      <DataGrid addButton={<MediaDialog />} columns={columns} rows={data} />
    </>
  );
}
