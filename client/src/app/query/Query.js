import React from "react";
import { Button, SplitButton, MenuItem } from "react-bootstrap";
// import AccordionPanel from "../../components/panel/AccordionPanel.js";
import QueryFilters from "./filter/QueryFilters.js";
import QueryColumns from "./columns/QueryColumns.js";
import "./Query.css";

const Query = (props) => {
  const saveQueryButton = () => {
    const { isNewQuery, canUpdateQuery, updateQuery, search, openSaveDialog } =
      props;
    if (isNewQuery) {
      return (
        <Button onClick={openSaveDialog} className="update-query">
          Save Query
        </Button>
      );
    }

    if (!canUpdateQuery) {
      return (
        <Button onClick={openSaveDialog} className="update-query">
          Save As...
        </Button>
      );
    }
    return (
      <div className="update-query">
        <SplitButton
          onClick={updateQuery}
          title={"Update Query"}
          id="save-query-split-button"
          pullRight
        ></SplitButton>
      </div>
    );
  };
  const { search } = props;
  const configArea = (
    <div>
      {/* <AccordionPanel title="Select Filters">
        <QueryFilters />
      </AccordionPanel> */}
      <Button className="query-button" onClick={search}>
        Query
      </Button>
    </div>
  );

  return <React.Fragment>{configArea}</React.Fragment>;
};

export default Query;
