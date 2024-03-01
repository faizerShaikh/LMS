"use client";
import { Checkbox } from "@mui/material";
import { DataGrid, DeleteBox, PageHeader } from "components/layout";
import { useGetAll } from "hooks";
import { FaqInterface, Topics  } from "interfaces/faq";
import FaqDialog from "./_components/FaqDialog";
import { FaqForm } from "./_components/FaqForm";



const columns = [
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
    valueGetter:(params: {row: FaqInterface}) => {
      return params.row.faqTopic.length;
    }
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
    renderCell: (params: {row: FaqInterface}) => {
      const checkboxProps = params.row.isFetured 
      ?{checked : true}
      :{};
      return <Checkbox {...checkboxProps} />
    }
  },
  {
    headerName: "Action",
    field: "action",
    flex: 1,
    cellClassName: "text-dark",
    renderCell: (params: { row: FaqInterface }) => {
      return (
        <>
        <FaqDialog isUpdate= {true} data = {params.row}/>
          <DeleteBox
            url={`/configurations/faq`}
            refetchUrl="/configurations/faq"
            title={`Delete ${params.row.faqTopic}`}
            data={params.row.id}
          />
          <FaqForm 
          refetchURL="/configurations/faq"/>
          
        </>
      );
    },
  },
];

export default function FaqPage() {
  const { data } = useGetAll({ key: "/configurations/faq" });
  // console.log(data, "<===================================data");
  return (
    <>
      <PageHeader title="FAQ'S" />
      <DataGrid addButton={<FaqDialog />}  columns={columns} rows={data} />
    </>
  );
}
