import { toast } from "../services/window/toastService.js";
import cuid from "cuid";
import Confirmations from "../confirmations.js";

const QUERY_LIMIT = 5;
const RESULTS_LIMIT = 5;
const DETAILS_LIMIT = 5;

export const newWindow = (windowId, windowType, name, title) => ({
  //type: NEW_WINDOW;
  windowId,
  windowType,
  name,
  title,
  ...getBrowserDimensions(),
});

export const closeWindowInner = (windowId) => ({
  //type: CLOSE_WINDOW,
  windowId,
});

export const minimizeWindow = (windowId) => ({
  //type: MINIMIZE_WINDOW,
  windowId,
});

export const activateWindow = (windowId) => ({
  //type: ACTIVATE_WINDOW,
  windowId,
});

export const maximizeWindow = (windowId) => {
  const dimensions = getBrowserDimensions();
  return {
    ...dimensions,
    //type:MAXIMIZE_WINDOW;
    windowId,
  };
};

export const topWindow = (windowId) => ({
  //type:TOP_WINDOW,
  windowId,
});

export const positionWindow = (windowId, position) => ({
  //type:POSITION_WINDOW,
  windowId,
  position,
});

export const sizeWindow = (windowId, size, position) => ({
  //type:SIZE_WINDOW,
  windowId,
  size,
  position,
});

export const setWindowTitle = (windowId, name, title) => ({
  //type:SET_WINDOW_TITLE,
  windowId,
  name,
  title,
});

export const openWindowConfirmation = (windowId, confirmation) => ({
  //type:SET_WINDOW_TITLE,
  windowId,
  confirmation,
});

export const closeWindowConfirmation = (windowId) => ({
  //type:SET_WINDOW_TITLE,
  windowId,
});

export const confirmWindowConfirmation = (
  windowId,
  confirmation,
  closeOnConfirmation
) => {
  return (dispatch) => {
    dispatch(closeWindowConfirmation(windowId));
    dispatch(Confirmations[confirmation].onYes(windowId));
    if (closeOnConfirmation) {
      dispatch(closeWindow(windowId));
    }
  };
};

export const browserResize = () => {
  return (dispatch) => {
    const dimensions = getBrowserDimensions();
    if (dimensions) {
      dispatch({
        ...dimensions,
      });
    }
  };
};

export const closeWindow = (windowId) => {
  return (dispatch, getState) => {
    const type = getWindow(getState(), windowId).type;
    try {
      switch (type) {
        case "Query": {
          dispatch(closeQuery(windowId));
          break;
        }
        case "Results": {
          dispatch(closeQueryResults(windowId));
          break;
        }
        case "Details": {
          dispatch(closeDetails(windowId));
          break;
        }
        default:
          break;
      }
      return dispatch(closeWindowInner(windowId));
    } catch (e) {
      toast(e.message, { type: "info" });
    }
  };
};
