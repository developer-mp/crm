import { Button, ButtonGroup } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import QueryContainer from "../../app/query/QueryContainer.js";
import QueryResultsContainer from "../../app/results/QueryResultsContainer.js";
import DetailsContainer from "../../app/details/DetailsContainer.js";
import WindowConfirmationContainer from "../windowConfirmation/windowConfirmationContainer.js";
import "./window.css";

const Window = () => {
  const windowRef = useRef();

  useEffect((prevProps) => {
    if (!this.props.hasFocus && prevProps.hasFocus) {
      windowRef.current.focus();
    } else {
      windowRef.current.focus();
    }
  });

  const handleWindowBarClick = (e) => {
    e.stopPropagation();
  };

  const getInnerComponent = () => {
    const { type, windowId } = this.props;
    if (type === "Query") return <QueryContainer queryId={windowId} />;
    else if (type === "Results")
      return <QueryResultsContainer resultsId={windowId} />;
    else if (type === "Details")
      return <DetailsContainer detailsId={windowId} />;
  };

  const getLoadingScreen = () => {
    return (
      <React.Fragment>
        <div className="loading-indicator">
          <i className="fas fa-2x fa-cog fa-spin"></i>
          <div>Loading</div>
        </div>
        <div className="loading-backsplash"></div>
      </React.Fragment>
    );
  };

  const getWindowTitle = () => {
    const { title, isEditing } = this.props;
    return isEditing ? `${title}` : title;
  };

  const focusWindow = () => {
    const { hasFocus, toggleWindow } = this.props;
    if (!hasFocus) {
      toggleWindow();
    }
  };

  const {
    loading,
    windowId,
    confirmation,
    hasFocus,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
  } = this.props;

  return (
    <div className="window">
      <div className={"window-bar " + (hasFocus ? "focused" : "")}>
        <div className="window-title">{getWindowTitle()}</div>
        <div className="window=controls" onMouseDown={handleWindowBarClick}>
          <ButtonGroup>
            <Button bsSize="xsmall" onClick={minimizeWindow}>
              <i className="far fa-window-mininmize"></i>
            </Button>
            <Button bsSize="xsmall" onClick={maximizeWindow}>
              <i className="far fa-window-maximize"></i>
            </Button>
            <Button bsSize="xsmall" bsStyle="danger" onClick={closeWindow}>
              <i className="fas fa-times"></i>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div
        className="window-contents"
        tabIndex="0"
        ref={windowRef}
        onFocus={focusWindow}
      >
        {loading && getLoadingScreen()}
        {getInnerComponent()}
        {confirmation && (
          <WindowConfirmationContainer
            windowId={windowId}
            confirmation={confirmation}
          />
        )}
      </div>
    </div>
  );
};

export default Window;
