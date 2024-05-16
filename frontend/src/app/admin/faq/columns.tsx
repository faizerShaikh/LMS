"use client";
import { GridColDef } from "@mui/x-data-grid";
import { Checkbox, DeleteBox } from "components/layout";
import { FaqInterface } from "interfaces/faq";
import FaqDialog from "./_components/FaqDialog";
import { FaqForm } from "./_components/FaqForm";

export const columns: GridColDef[] = [
  {
    headerName: "Header",
    field: "question",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "No of FAQ'S",
    field: "answer",
    flex: 1,
    cellClassName: "text-dark",
    valueGetter: (params: { row: FaqInterface }) => {
      return params.row.faqTopic.length;
    },
  },
  {
    headerName: "Order",
    field: "orderBy",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Is Feturead",
    field: "isFeatured",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: FaqInterface }) => {
      const checkboxProps = params.row.isFeatured
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
    renderCell: (params: { row: FaqInterface }) => {
      return (
        <>
          <FaqDialog
            isUpdate={true}
            data={params.row}
            refetchURL="configurations/faq"
          />
          <DeleteBox
            url={`/configurations/faq`}
            refetchUrl="configurations/faq"
            title={`Delete ${params.row.qustion}`}
            data={params.row.id}
          />
          <FaqForm
            refetchURL="configurations/faq"
            isUpdate={true}
            data={
              params.row?.faqTopic?.length > 0 && { faq: params.row.faqTopic }
            }
            faqId={params.row.id || ""}
          />
        </>
      );
    },
  },
];
