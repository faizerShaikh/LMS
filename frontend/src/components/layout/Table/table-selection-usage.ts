// import { Checkbox, Chip, Grid } from "@mui/material";
// import React, { useContext } from "react";
// import ReactTable from "../../layouts/ReactTable";
// import ChangeIPDialog from "../ChangeIPDialog";
// import CheckPingDialog from "../CheckPingDialog";
// import { useParams } from "react-router-dom";
// import AuthContext from "../../../context/authContext/AuthContext";
// import { DotMark } from "@carbon/icons-react";
// import { chipColors } from "../../../constants/theme";
// import moment from "moment";
// import Sync from "../Sync";

// const StatusFormatter = (status) => {
//   return (
//     <Chip
//       icon={<DotMark color={chipColors.DotColor[status?.toLowerCase()]} />}
//       sx={{
//         color: chipColors.color[status?.toLowerCase()],
//         backgroundColor: chipColors.backgroundColor[status?.toLowerCase()],
//         borderRadius: "4px",
//       }}
//       label={status}
//     />
//   );
// };

// const FreeIPs = ({ allocated, free }) => {
//   const { checkPermission } = useContext(AuthContext);

//   const { subnet_mask } = useParams();

//   const columns = [
//     {
//       Header: "Location Name",
//       accessor: "location",
//       minWidth: 100,
//       width: 100,
//       sortable: false,
//       apiURL: `/admin/location`,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "equals", label: "Equals" },
//         { value: "starts_with", label: "Starts With" },
//         { value: "end_with", label: "Ends With" },
//       ],
//       Cell: ({ row }) => (
//         <p className="m-0">
//           {row?.original?.["IPSubnetMask.Location.location"]}
//         </p>
//       ),
//     },
//     {
//       Header: "Country Name",
//       accessor: "country",
//       minWidth: 100,
//       width: 100,
//       sortable: false,
//       label: "Country.country",
//       apiURL: `/admin/location?order=asc&sortField=country`,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "equals", label: "Equals" },
//         { value: "starts_with", label: "Starts With" },
//         { value: "end_with", label: "Ends With" },
//       ],
//       Cell: ({ row }) => (
//         <p className="m-0">
//           {row?.original?.["IPSubnetMask.Location.Country.country"]}
//         </p>
//       ),
//     },
//     {
//       Header: "IP Address",
//       accessor: "ip_address",
//       minWidth: 110,
//       width: 110,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "is_between", label: "Is Between" },
//         { value: "equals", label: "Equals" },
//       ],
//     },
//     {
//       Header: "Subnet",
//       accessor: "subnet",
//       minWidth: 110,
//       width: 110,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "is_between", label: "Is Between" },
//         { value: "equals", label: "Equals" },
//       ],
//       Cell: ({ row }) => (
//         <p className="m-0">{row?.original?.["IPSubnetMask.ip_subnet_mask"]}</p>
//       ),
//     },
//     {
//       Header: "VLAN",
//       accessor: "vlan",
//       minWidth: 80,
//       width: 80,
//       sortable: false,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "equals", label: "Equals" },
//       ],
//       Cell: ({ row }) => (
//         <p className="m-0">{row?.original?.["IPSubnetMask.vlan"]}</p>
//       ),
//     },
//     {
//       Header: "Device",
//       accessor: "device",
//       minWidth: 120,
//       width: 150,
//       sortable: false,
//       nofilter: true,
//     },
//     {
//       Header: "Status",
//       accessor: "status",
//       minWidth: 100,
//       width: 120,
//       sortable: !allocated && !free,
//       nofilter: true,
//       Cell: ({ row }) => {
//         return StatusFormatter(row?.original?.status);
//       },
//     },
//     {
//       Header: "Network Ping",
//       accessor: "network_ping",
//       minWidth: 100,
//       width: 100,
//       sortable: false,
//       nofilter: true,
//       Cell: ({ row }) => {
//         return <CheckPingDialog data={row?.original} />;
//       },
//     },
//     {
//       Header: "Remarks",
//       accessor: "remarks",
//       minWidth: 130,
//       width: 180,
//       sortable: false,
//       operator: [
//         { value: "contains", label: "Contains" },
//         { value: "equals", label: "Equals" },
//       ],
//     },
//     {
//       Header: "Action",
//       accessor: "action",
//       nofilter: true,
//       minWidth: 160,
//       width: 160,
//       sortable: false,
//       Cell: ({ row }) => {
//         return (
//           checkPermission(row?.original?.["IPSubnetMask.permission_str"]) && (
//             <Grid container>
//               {row?.original?.status?.toLowerCase() === "allocated" ? (
//                 <>
//                   <ChangeIPDialog data={row?.original} />
//                   <ChangeIPDialog type={"edit"} data={row?.original} />
//                 </>
//               ) : (
//                 row?.original?.status?.toLowerCase() === "free" && (
//                   <>
//                     <ChangeIPDialog type={"allocate"} data={row?.original} />
//                     <ChangeIPDialog type={"edit"} data={row?.original} />
//                   </>
//                 )
//               )}
//             </Grid>
//           )
//         );
//       },
//     },
//   ];

//   return (
//     <Grid container>
//       <div className="d-flex justify-content-end w-100">
//         <Sync />
//       </div>
//       <ReactTable
//         url={`/ips/ipaddresses`}
//         extraQuery={{
//           type: allocated ? "Allocated" : free ? "Free" : "",
//           // location_id: globalLocation?.id,
//           subnet_mask,
//         }}
//         rows={[]}
//         columns={
//           free || allocated
//             ? [
//                 {
//                   id: "selection",
//                   Header: ({ getToggleAllRowsSelectedProps }) => (
//                     <Checkbox
//                       color="warning"
//                       {...getToggleAllRowsSelectedProps()}
//                     />
//                   ),
//                   width: 60,
//                   sortable: false,
//                   Cell: ({ row }) => {
//                     return (
//                       <Checkbox
//                         color="warning"
//                         {...row.getToggleRowSelectedProps()}
//                       />
//                     );
//                   },
//                 },
//                 ...columns,
//               ]
//             : columns
//         }
//         title={allocated ? "Allocated IPs" : free ? "Free IPs" : "All IPs"}
//         manualPagination
//         downloadExcel
//         rowHeight={55}
//         downloadExcelQuery={{
//           fileName: `$IP_Addresses_${moment().format(
//             "DDMMYY"
//           )}_${moment().format("HHmmss")}.xlsx`.replace(
//             /[`~!@#$%^&*|+\=?;:'",<>\{\}\[\]\\\/]/gi,
//             ""
//           ),
//         }}
//         CheckFiltersForDownload
//         checkboxSelection={free || allocated}
//       />
//     </Grid>
//   );
// };

// export default FreeIPs;