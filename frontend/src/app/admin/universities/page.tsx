'use client';
import axios from "axios";
import { DataGrid, PageHeader } from "components/layout";
import { useEffect, useState } from "react";

const columns = [
    {
      headerName: "Name",
      field: "name",
      flex: 1,
      cellClassName: "text-dark",
    },
    {
      headerName: "Short Name",
      field: "short_name",
      flex: 1,
      cellClassName: "text-dark",
    },
    {
      headerName: "Description",
      field: "description",
      flex: 1,
      cellClassName: "text-dark",
    },
    {
      headerName: "No of Courses",
      field: "no_of_courses",
      flex: 1,
      cellClassName: "text-dark",
    },
]

export default function University(){

  const [universities, setUniversities] = useState([])
  const getUniversityData = async()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configrations/university`)
    setUniversities(res.data.data.rows)
  }


  useEffect(()=>{
    getUniversityData()
  }, [])

    return <>
        <PageHeader title="Univerities"/>
        <DataGrid columns={columns} rows={universities}/>
    </>
} 