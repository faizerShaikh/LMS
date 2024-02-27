"use client";
import { DataGrid, PageHeader } from "components/layout";
import { useGetAll } from "hooks";

const columns = [
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Organization",
    field: "organization",
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
    headerName: "Email",
    field: "email",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Type",
    field: "type",
    flex: 1,
    cellClassName: "text-dark",
  },
  {
    headerName: "Status",
    field: "status",
    flex: 1,
    cellClassName: "text-dark",
  },
];
export default function EnquiriesPage() {
  // const [data, setData] = useState([]);
  // const getEnquiries = async () => {
  //   const response = await axios.get(
  //     `${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/enquiry`
  //   );
  //   // console.log(`${process.env.NEXT_PUBLIC_BASE_API_URL}/configurations/enquiry`);
  //   setData(response.data.data.rows)
  // };

  // useEffect(()=> {
  //   getEnquiries()
  // }, [])
  const { data } = useGetAll({ key: '/configurations/enquiry' })
  return (
    <>
      <PageHeader title="Enquiries" />
      <DataGrid columns={columns} rows={data} />
    </>
  );
}
