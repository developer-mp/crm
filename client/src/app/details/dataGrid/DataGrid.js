// import ReactTable from "react-table";
// import { Button } from "react-bootstrap";
// import "./DataGrid.css";
// import ExportService from "./../../../services/exportService.js";
// import React from "react";

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

const DataGrid = () => {
  return <div>Data Grid</div>;
};

export default DataGrid;
