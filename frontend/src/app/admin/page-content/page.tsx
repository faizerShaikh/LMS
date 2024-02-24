'use client';
// import axios from "axios";
import { DataGrid, PageHeader } from "components/layout";
// import { useEffect, useState } from "react";
// import FormDialog from "./_components/formDilog";
import { useGetAll } from "hooks";
import { PageContentInterface } from "interfaces";
import { PageContentDialog } from "./_components/PageContentDialog";

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
            return <>
              <PageContentDialog isUpdate={true} data={params.row} />
            </>
          }
    }
]

export default function PageContent() {
    
    // const[data, setData] = useState([])
    // const getPageContent = async()=>{
    //     const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/page-content`)
    //     setData(response.data.data.rows)
    // }
    // useEffect(()=>{
    //     getPageContent()
    // }, [])

    const { data } = useGetAll({
        key: '/configrations/page-content',
      })

    return <>
        <PageHeader title="Page Content" />
        {/* <div className="flex justify-end">
        <FormDialog></FormDialog>
        </div> */}
        <DataGrid columns={columns} rows={data} />
    </>
}
