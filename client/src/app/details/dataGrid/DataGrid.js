import { Button } from "react-bootstrap";
import "./DataGrid.css";
import ExportService from "./../../../services/exportService.js";
import React from "react";

// const DataGrid = () => {
//   const constructHeaders = (columns) => {
//     if (!columns) return [];
//     return columns
//       .filter((column) => !column.isHidden)
//       .map((column) => ({
//         id: column.dataField,
//         Header: column.text,
//         accessor: (value) => {
//           if (column.datatype === 12) {
//             return value[column.dataField] ? "Y" : "N";
//           }
//           if (value[column.dataField])
//             return value[column.dataField].toString();
//           return "";
//         },
//       }));
//   };

//   const exportResults = () => {
//     const { dataElement } = this.props;
//     ExportService.parseResultsToScv(dataElement.columns, dataElement.data);
//   };

//   const getTdProps = (state, row) => ({
//     onClick: (e, handleOriginal) => {
//       const { isEditing, editRow } = this.props;
//       if (isEditing && row) {
//         editRow(row.index);
//       }
//       if (handleOriginal) {
//         handleOriginal();
//       }
//     },
//   });

//   const { dataElement, isEditing, addRow, noAdd } = this.props;
//   const showExport = dataElement.isExport && dataElement.data.length > 0;

//   return (
//     <React.Fragment>
//       <div className="data-grid-actions">
//         {isEditing && (
//           <React.Fragment>
//             {!noAdd && (
//               <Button
//                 bsStyle="primary"
//                 bsSize="xs"
//                 className="add-row"
//                 onClick={addRow}
//               >
//                 <i className="fas fa-plus"></i> Add Row
//               </Button>
//             )}
//             <p className="data-grid-instructions">Click on a row to edit</p>
//           </React.Fragment>
//         )}
//         {showExport && (
//           <Button bsSize="xs" onClick={exportResults}>
//             Export
//           </Button>
//         )}
//       </div>
//       <ReactTable
//         className={isEditing ? "data-grid-highlight" : "data-grid"}
//         data={dataElement.data}
//         columns={constructHeaders(dataElement.columns)}
//         defaultPageSize={10}
//         showPaginationBottom={dataElement.data.length > 10}
//         minRows={1}
//         getTdProps={getTdProps}
//       />
//     </React.Fragment>
//   );
// };

// export default DataGrid;

import { useSelector } from "react-redux";
import { useTable } from "react-table";
import { useMemo } from "react";

const DataGrid = () => {
  const { detailItems } = useSelector((store) => store.detail);
  // console.log(detailItems[0]?.customer);
  //const keys = Object.keys(detailItems[0]);
  // console.log(keys);

  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: detailItems[0]?.customer,
        accessor: "col1",
      },
      {
        Header: detailItems[0]?.customer,
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataGrid;
