import React, { useEffect, useState } from "react";
import {
  Grid,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useTable,
  useResizeColumns,
  usePagination,
  useColumnOrder,
  useFlexLayout,
  useExpanded,
  useRowSelect,
} from "react-table";
import CustomPagination from "./CustomPagination";
import {
  useCreateOrUpdate,
  useDebounce,
  useDownloadFile,
  useGetAll,
} from "../../../hooks";
import { Search } from "../../inputs/Search";
import { colors } from "../../../constants/theme";
import NoData from "./NoData";
import SecondaryButton from "../../inputs/secondaryButton";
import { Download } from "@carbon/icons-react";
import ManageColumns from "./ManageColumns";
import ApplyFilters from "./ApplyFilters";
import { toast } from "react-toastify";
import Sorting from "./Sorting";
import DownloadFileComponents from "./DownloadFileComponents";
import errorHandle from "../../../utils/errorHandle";
import MultiAllocateIPs from "../../manageIPs/MultiAllocateIPs";

const dataGridStyles = {
  borderRadius: 0,
  border: "none",
  width: "100%",
  "& .MuiTableHead-root": {
    borderRadius: 0,
    color: colors.text.dark,
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      padding: "2px 8px 2px 6px",
      // padding: "2px 8px 2px 6px",
    },
    "& .MuiTableCell-root.MuiTableCell-head": {
      backgroundColor: colors.primary.light,
      fontWeight: "400",
      fontFamily: "FuturaMedium",
      color: colors.text.dark,
      fontSize: {
        sm: "12px",
        lg: "12.5px",
        xl: "13px",
      },
      display: "flex",
      alignItems: "center",
      height: "50px",
    },
  },
  "& .MuiDataGrid-virtualScroller": {
    borderLeft: `1px solid #E0E7ED`,
    borderRight: `1px solid #E0E7ED`,
  },
  "& .MuiDataGrid-cell": {
    color: "#525252 !important",
    fontFamily: "FuturaLight",
    fontWeight: "300",
  },
  "& .MuiTableCell-root.MuiTableCell-body": {
    fontSize: {
      md: "12.5px",
      lg: "12.5px",
      xl: "14px",
    },
    fontFamily: "FuturaLight",
    color: colors.tertiary.dark,
    height: "55px",
    padding: "0px 16px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTableRow-root": {
    borderLeft: "1px solid #E0E7ED",
    borderRight: "1px solid #E0E7ED",
  },
  "& .MuiCheckbox-root": {
    color: "#c4c4c4",
  },
  "& .MuiTableCell-root": {
    "& .resizer": {
      display: "inline-block",
      background: "#fdc08c",
      width: "2px",
      height: "100%",
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translateX(50%)",
      zIndex: 1,
      touchAction: "none",
    },

    "& .resizer.isResizing": {
      background: colors.primary.dark,
      width: "3px",
    },
  },
};

const ReactTable = ({
  columns,
  rows,
  addButton,
  noSearch = false,
  manualPagination = true,
  refetchInside = false,
  rowHeight,
  isLoading,
  downloadExcel,
  extraQuery,
  showFilter = true,
  title,
  url = "",
  selectedRowID,
  renderRowSubComponent,
  downloadExcelQuery,
  checkboxSelection,
  otherExtraButtons,
  CheckFiltersForDownload,
}) => {
  let title_slug = title?.replace(/ /g, "-");
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [queryKey, setQueryKey] = useState("");
  const [customPageCount, setCustomPageCount] = useState(1);
  const [tableData, setTableData] = useState(
    ("rows" in data && data?.rows) || []
  );
  const [filters, setFilters] = useState(
    localStorage.getItem(`filters-of-${title_slug}`)
      ? JSON.parse(localStorage.getItem(`filters-of-${title_slug}`))
      : []
  );

  const [order, setOrder] = useState();
  const [sortField, setSortField] = useState();
  const [tableColumns, setTableColumns] = useState(columns || []);
  const [columnOrderArr, setColumnOrderArr] = useState(
    JSON.parse(localStorage.getItem(`columns-of-${title_slug}`))
      ? JSON.parse(
          JSON.parse(localStorage.getItem(`columns-of-${title_slug}`))
            .columnOrder
        )
      : []
  );
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    if (data) {
      setTableData(("rows" in data && data?.rows) || []);
    }
  }, [data]);

  const [pagination, setPagination] = useState({
    page: 0,
    limit: 25,
  });

  let clientPaginationOptions = manualPagination
    ? { manualPagination: manualPagination, pageCount: customPageCount }
    : {};

  useEffect(() => {
    let preference = JSON.parse(localStorage?.getItem("userObj"))?.preferences
      ?.user_preference;
    if (preference && JSON.parse(preference)[`columns-of-${title_slug}`]) {
      setTableMetaData(JSON.parse(preference)[`columns-of-${title_slug}`]);
    }
    //eslint-disable-next-line
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    //pagination options
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    visibleColumns,
    setColumnOrder,
    toggleHideAllColumns,
    setHiddenColumns,
    selectedFlatRows,
    columns: updatedColumns,
    state: { pageIndex, pageSize }, 
  } = useTable(
    {
      columns: tableColumns,
      data: tableData,
      initialState: {
        pageIndex: 0,
        pageSize: 25,
        columnOrder: columnOrderArr,
        hiddenColumns: JSON.parse(localStorage.getItem(`columns-of-${title}`))
          ? JSON.parse(
              JSON.parse(localStorage.getItem(`columns-of-${title}`))
                .hiddenColumns
            )
          : columns.reduce(
              (prev, curr) => (curr.hidden ? [...prev, curr.accessor] : prev),
              []
            ),
      },

      ...clientPaginationOptions,
      getRowId: React.useCallback((row) => row.id, []),
    },
    useColumnOrder,
    // useBlockLayout,
    useFlexLayout,
    useResizeColumns,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const setTableMetaData = (data) => {
    if (data) {
      let newHiddenColumns = [];
      let newColumns = [];
      for (const column of columns) {
        if (column.hidden) {
          newHiddenColumns.push(column.accessor);
        }
        newColumns.push({
          ...column,
        });
      }
      localStorage.setItem(`columns-of-${title_slug}`, JSON.stringify(data));
      setTableColumns(newColumns);

      setTimeout(() => {
        setHiddenColumns(
          JSON.parse(data.hiddenColumns).length
            ? JSON.parse(data.hiddenColumns)
            : newHiddenColumns
        );
        setColumnOrder(JSON.parse(data.columnOrder));
      }, 500);
    }
  };

  useEffect(() => {
    if (pageIndex === 0 && tableData?.length > 0) {
      setCustomPageCount(
        data
          ? Math.ceil(("count" in data ? data.count : 1) / tableData?.length)
          : 1
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.limit, tableData]);

  const search = useDebounce(query || "", 1000);

  useEffect(() => {
    if (Object.keys(rows)?.length > 0) {
      setData(rows);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    if (refetchInside) {
      setQueryKey(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchInside, url]);

  const { mutate, isLoading: mutateLoading } = useCreateOrUpdate({
    url: `/admin/preference`,
  });

  const postTableMetaData = () => {
    let hiddenColumns = [];
    let columnOrder = columnOrderArr;
    for (const column of updatedColumns) {
      if (!column.isVisible) {
        hiddenColumns.push(column.id);
      }
    }
    let user_preference = {
      [`columns-of-${title_slug}`]: {
        hiddenColumns: JSON.stringify(hiddenColumns),
        columnOrder: JSON.stringify(columnOrder),
      },
    };
    let old_userObj = JSON.parse(localStorage.getItem("userObj"));
    let old_preference = old_userObj?.preferences?.user_preference
      ? JSON.parse(old_userObj?.preferences?.user_preference)
      : {};

    let new_preference = {
      ...old_userObj,
      preferences: {
        user_preference: JSON.stringify({
          ...old_preference,
          ...user_preference,
        }),
      },
    };

    localStorage.setItem("userObj", JSON.stringify(new_preference));
    return { user_preference: user_preference };
  };

  const { refetch: refetchTableData, isFetching } = useGetAll({
    key: url,
    params: manualPagination
      ? {
          page: pagination.page,
          limit: pagination.limit,
          search: search,
          ...extraQuery,
          filters: filters?.map((item) => ({
            column: item?.column?.id,
            operator: item?.operator?.value,
            value: Array.isArray(item?.value)
              ? item?.column?.id === "country" &&
                item?.operator?.value === "equals"
                ? item?.value?.map((i) => i?.country_id)
                : item?.value?.map((i) => {
                    return i?.mail || i?.userPrincipalName || i?.id || i;
                  })
              : item?.value,
          })),
          order,
          sortField,
        }
      : { ...extraQuery },
    enabled: refetchInside || Boolean(queryKey),
    onSuccess(data) {
      setData(data);
    },
  });

  const handleSortingChange = (accessor, colOrder) => {
    setSortField(accessor);
    setOrder(colOrder);
    refetchTableData();
  };

  useEffect(() => {
    if (filters?.length > 0) {
      refetchTableData();
    }
    //eslint-disable-next-line
  }, [filters]);

  useEffect(() => {
    setPagination((prev) => ({ ...prev, page: pageIndex }));
    setQueryKey(
      `${url}?page=${pageIndex}&limit=${pagination?.limit}&search=${search}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  useEffect(() => {
    if (pageSize) {
      setPagination((prev) => ({ ...prev, limit: pageSize }));
      setQueryKey(
        `${url}?page=${pagination?.page}&limit=${pageSize}&search=${search}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  useEffect(() => {
    if (search) {
      setPagination((prev) => ({ ...prev, page: 0 }));
      setCustomPageCount(1);
      setQueryKey(
        `${url}?page=${0}&limit=${pagination.limit}&search=${search}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pagination.limit, url]);

  const onClear = () => {
    setQuery("");
    if (url) {
      setQueryKey(`${url}?page=${pagination.page}&limit=${pagination.limit}`);
    } else {
      setData(rows);
    }
  };

  const onChange = (e) => {
    if (e.target.value) {
      setQuery(e.target.value);
    } else {
      setQueryKey(`${url}?page=${pagination.page}&limit=${pagination.limit}`);
      setQuery(e.target.value);
    }
  };

  useGetAll({
    key: `/table-metadata/${title_slug}`,
    enabled: false,
    // enabled: !localStorage.getItem(`columns-of-${title}`),
    select: (data) => {
      return data.data.data;
    },
    onSuccess: (data) => {
      setTableMetaData(data);
    },
  });

  return (
    <Grid
      container
      className="flex flex-column"
      rowSpacing={2}
      style={{ maxWidth: "100%" }}
    >
      {/* <div style={{ maxWidth: "100%", overflowX: "auto" }}> */}
      <Grid
        item
        // xs={12}
        className="d-flex align-items-center justify-content-between flex-wrap w-full"
      >
        <Grid item xs={12} md={5} display="flex" alignItems={"center"}>
          {!noSearch ? (
            <>
              <Search
                sx={{ width: { xs: "200px", md: "300px" } }}
                value={query}
                onClear={onClear}
                onChange={onChange}
              />
            </>
          ) : (
            <div />
          )}
          {!noSearch && showFilter && <div className="border  py-3 mx-3"></div>}
          {showFilter && (
            <ApplyFilters
              title={title}
              allColumns={allColumns}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          mt={1}
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          flexWrap={"wrap"}
          rowGap={1}
        >
          <DownloadFileComponents
            fileName={fileName}
            setFileName={setFileName}
            title_slug={title_slug}
          />
          {otherExtraButtons}
          {checkboxSelection && (
            <MultiAllocateIPs
              ips={data?.rows}
              selectedRows={selectedFlatRows}
              isAllocation={title_slug === "Free-IPs"}
            />
          )}{" "}
          <ManageColumns
            allColumns={allColumns}
            setColumnOrder={setColumnOrder}
            visibleColumns={visibleColumns}
            toggleHideAllColumns={toggleHideAllColumns}
            setColumnOrderArr={setColumnOrderArr}
            mutate={mutate}
            postTableMetaData={postTableMetaData}
            isLoading={mutateLoading}
          />
          {downloadExcel && (
            <SecondaryButton
              onClick={() => {
                if (
                  CheckFiltersForDownload &&
                  !filters?.some(
                    (item) =>
                      item?.column?.id === "location" ||
                      item?.column?.id === "country"
                  )
                ) {
                  return toast.info(
                    "Please select atleast 1 Location or Country for downloading the Excel"
                  );
                }

                if (downloadExcelQuery) {
                  localStorage.setItem(
                    `file-of-${title_slug}`,
                    `/downloads/${downloadExcelQuery?.fileName}`
                  );
                  toast.info("Excel Download in Progress");
                }
                GetExcel();
              }}
              isLoading={ExcelLoading}
              loaderColor={"warning"}
              startIcon={
                <Download
                  color={colors.primary.dark}
                  size={"20"}
                  className="me-1"
                />
              }
            >
              Download Excel
            </SecondaryButton>
          )}
          {addButton && <div className="border  py-3 mx-3"></div>}
          {addButton}
        </Grid>
      </Grid>
      <Grid
        item
        // xs={12}
        sx={{
          height: !("rows" in data ? data.rows : data || []).length
            ? "500px"
            : "auto",
          width: "100%",
          maxWidth: "100%",
          // width: "fit-content",
          overflowX: "auto",
        }}
      >
        <Table sx={dataGridStyles} {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow
                style={{
                  width: "100%",
                }}
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
              >
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps({
                      // style: { minWidth: column.minWidth, width: column.width },
                    })}
                    key={column?.id}
                  >
                    {column.render("Header")}
                    {column?.sortable !== false && (
                      <Sorting
                        column={column}
                        order={order}
                        sortField={sortField}
                        handleSortingChange={handleSortingChange}
                      />
                    )}

                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          {isFetching ? (
            <TableBody sx={{ border: "none" }}>
              <TableRow sx={{ height: "10px !important", border: "none" }}>
                <TableCell
                  sx={{
                    height: "10px !important",
                    border: "none",
                    padding: "0px !important",
                  }}
                >
                  <LinearProgress
                    color="warning"
                    sx={{ width: "100%" }}
                    variant="indeterminate"
                  ></LinearProgress>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : tableData?.length < 1 ? (
            <TableBody>
              <TableRow>
                {/* <TableCell> */} <NoData />
                {/* </TableCell> */}
              </TableRow>
            </TableBody>
          ) : (
            <TableBody
              className={`${isFetching ? "table-loader" : ""}`}
              {...getTableBodyProps()}
            >
              {page.map((row, pageIndex) => {
                prepareRow(row);
                return (
                  <>
                    <TableRow
                      {...row.getRowProps({
                        style: {
                          background:
                            row?.id === selectedRowID ? "#ffeee6" : "",
                          borderBottom: row.isExpanded
                            ? "1px dashed #C9C5CA"
                            : "1px solid #E0E7ED",
                        },
                      })}
                      key={`${row?.id}${pageIndex}`}
                    >
                      {row.cells.map((cell, index) => {
                        return (
                          <TableCell
                            {...cell.getCellProps({
                              style: {
                                minWidth: cell.column.minWidth,
                                width: cell.column.width,
                                height: rowHeight ? rowHeight : "40px",
                                borderBottom: row.isExpanded
                                  ? "none"
                                  : "1px solid #E0E7ED",
                              },
                            })}
                            key={`${cell?.value}${index}`}
                            className="text-truncate"
                          >
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                    {row.isExpanded && (
                      <TableRow sx={{ border: `none !important` }}>
                        <TableCell
                          sx={{
                            height: "auto !important",
                            padding: `0 !important`,
                          }}
                          colSpan={visibleColumns.length}
                        >
                          {renderRowSubComponent({ row })}
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                );
              })}
            </TableBody>
          )}
        </Table>
      </Grid>

      {/* </div> */}

      <CustomPagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </Grid>
  );
};

export default ReactTable;