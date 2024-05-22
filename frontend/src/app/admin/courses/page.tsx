// "use client";
// import { Course } from "interfaces";
// import CourseForm from "./components/CoursesForm";
// import { DeleteBox } from "components/layout/dialogBox/delete/index";
import { PageHeader } from "components/layout/pageHeader/index";
import { DataGrid } from "components/layout/dataGrid/index";
import axios from "axios";
import { columns } from "./columns";
import CourseForm from "./components/CoursesForm";

// const columns = [
//   {
//     headerName: "Name",
//     field: "name",
//     flex: 1,
//     cellClassName: "text-dark",
//   },
//   {
//     headerName: "Description",
//     field: "description",
//     flex: 1,
//     cellClassName: "text-dark",
//   },
//   {
//     headerName: "Action",
//     field: "action",
//     flex: 1,
//     cellClassName: "text-dark",
//     renderCell: (params: { row: Course }) => {
//       return (
//         <>
//           <CourseForm
//             isUpdate={true}
//             data={params.row}
//             refetchURL="/configurations/course"
//           />
//           <DeleteBox
//             url={`/configurations/course`}
//             refetchUrl="/configurations/course"
//             title={`Delete ${params.row.name}`}
//             data={params.row.id}
//           />
//         </>
//       );
//     },
//   },
// ];

///// using static proops //////
// export const getStaticProps = async () => {
//   const res = await fetch("configurations/course");
//   const data = await res.json();
//   return {
//     props: { data: data },
//   };
// };

// export default function Cources({ data }: any) {
//   return (
//     <>
//       <PageHeader title="Cources" />
//       <DataGrid addButton={<CourseForm />} columns={columns} rows={data} />
//     </>
//   );
// }

///// using getServerSideProps  //////

// export const getServerSideProps = async () => {
//   const res = await fetch("configurations/course");
//   const data = await res.json();
//   return {
//     props: { data: data },
//   };
// };

// export default function Cources({ data }: any) {
//   return (
//     <>
//       <PageHeader title="Cources" />
//       <DataGrid addButton={<CourseForm />} columns={columns} rows={data} />
//     </>
//   );
// }

async function getData() {
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course`
  );
  return res.data.data.rows;
}
export default async function Cources() {
  const data = await getData();
  return (
    <>
      <PageHeader title="Courses" />
      <DataGrid addButton={<CourseForm />} columns={columns} rows={data} />
    </>
  );
}

// export default function Cources() {
//   const [data, setData] = useState<BasePaginatedDataInterface<Course>>({
//     rows: [],
//     count: 0,
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responseData = await GetCourse();
//         setData(responseData);
//         console.log("hello <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <>
//       <PageHeader title="Cources" />
//       <DataGrid addButton={<CourseForm />} columns={columns} rows={data} />
//     </>
//   );
// }

// export default async function Cources() {
//   const resp = await API.get("configurations/course");
//   let data = resp.data.data;
//   console.log(data, "<<<<<<<<<<<<<<<<<<<<<<,data");
//   return (
//     <>
//       <PageHeader title="Cources" />
//       <DataGrid addButton={<CourseForm />} columns={columns} rows={data.rows} />
//     </>
//   );
// }
