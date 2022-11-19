import ReactTable from "react-table";
import { Button } from "react-bootstrap";
import "./QueryFilters.css";
import AccordionPanel from "../../../components/panel/AccordionPanel.js";

const QueryFilters = (props) => {
  const getTdProps = (state, row, column) => ({
    onClick: (e, handleOriginal) => {
      const { newQuery, deleteQuery } = props;
      if (row && row.original) {
        column.id === "delete" && row.original.canDelete
          ? deleteQuery(row.original.id, row.original.searchId)
          : newQuery(row.original.id, row.original.searchId);
      }
      if (handleOriginal) {
        handleOriginal();
      }
    },
  });

  const { queryFilters } = props;
  if (!queryFilters) return null;
  const headers = [
    {
      Header: "Query Name",
      accessor: "name",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "",
      Cell: (row) => {
        if (row.original.canDelete) {
          return (
            <Button bsSize="xsmall" bsStyle="danger">
              <i className="fas fa-times" />
            </Button>
          );
        }
        return null;
      },
      accessor: "delete",
      sortable: false,
      width: 45,
      className: "table-checkbox",
    },
  ];
  return (
    <div className="sideAConfid">
      <AccordionPanel title="Query List" bs="primary">
        <ReactTable
          className="-highlight"
          data={queryFilters}
          columns={headers}
          showPaginationTop={queryFilters.length > 10}
          showPageSizeOptions={false}
          showPaginationBottom={false}
          defaultPageSize={10}
          getTdProps={getTdProps}
          minRows={4}
        />
      </AccordionPanel>
    </div>
  );
};

export default QueryFilters;
