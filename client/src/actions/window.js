// // import { toast } from "../services/window/toastService.js";
// import cuid from "cuid";
// // import Confirmations from "../confirmations.js";
// import { getWindowCount } from "../slices/index.js";
// import { constructNewQuery } from "./query.js";

// const QUERY_LIMIT = 5;
// const RESULTS_LIMIT = 5;
// const DETAILS_LIMIT = 5;

// export const NEW_WINDOW = "NEW_WINDOW";
// export const CLOSE_WINDOW = "CLOSE_WINDOW";
// export const ACTIVATE_WINDOW = "ACTIVATE_WINDOW";
// export const MINIMIZE_WINDOW = "MINIMIZE_WINDOW";
// export const MAXIMIZE_WINDOW = "MAXIMIZE_WINDOW";
// export const TOP_WINDOW = "TOP_WINDOW";
// export const POSITION_WINDOW = "POSITION_WINDOW";
// export const SIZE_WINDOW = "SIZE_WINDOW";
// export const SET_WINDOW_TITLE = "SET_WINDOW_TITLE";
// export const BROWSER_RESIZE = "BROWSER_RESIZE";
// export const OPEN_WINDOW_CONFIRMATION = "OPEN_WINDOW_CONFIRMATION";
// export const CLOSE_WINDOW_CONFIRMATION = "CLOSE_WINDOW_CONFIRMATION";

// export const newWindow = (windowId, windowType, name, title) => ({
//   type: NEW_WINDOW,
//   windowId,
//   windowType,
//   name,
//   title,
//   ...getBrowserDimensions(),
// });

// export const closeWindowInner = (windowId) => ({
//   type: CLOSE_WINDOW,
//   windowId,
// });

// export const minimizeWindow = (windowId) => ({
//   type: MINIMIZE_WINDOW,
//   windowId,
// });

// export const activateWindow = (windowId) => ({
//   type: ACTIVATE_WINDOW,
//   windowId,
// });

// export const maximizeWindow = (windowId) => {
//   const dimensions = getBrowserDimensions();
//   return {
//     ...dimensions,
//     type: MAXIMIZE_WINDOW,
//     windowId,
//   };
// };

// export const topWindow = (windowId) => ({
//   type: TOP_WINDOW,
//   windowId,
// });

// export const positionWindow = (windowId, position) => ({
//   type: POSITION_WINDOW,
//   windowId,
//   position,
// });

// export const sizeWindow = (windowId, size, position) => ({
//   type: SIZE_WINDOW,
//   windowId,
//   size,
//   position,
// });

// export const setWindowTitle = (windowId, name, title) => ({
//   type: SET_WINDOW_TITLE,
//   windowId,
//   name,
//   title,
// });

// export const openWindowConfirmation = (windowId, confirmation) => ({
//   type: OPEN_WINDOW_CONFIRMATION,
//   windowId,
//   confirmation,
// });

// export const closeWindowConfirmation = (windowId) => ({
//   type: CLOSE_WINDOW_CONFIRMATION,
//   windowId,
// });

// export const confirmWindowConfirmation = (
//   windowId,
//   confirmation,
//   closeOnConfirmation
// ) => {
//   return (dispatch) => {
//     dispatch(closeWindowConfirmation(windowId));
//     // dispatch(Confirmations[confirmation].onYes(windowId));
//     // if (closeOnConfirmation) {
//     //   dispatch(closeWindow(windowId));
//     // }
//   };
// };

// export const browserResize = () => {
//   return (dispatch) => {
//     const dimensions = getBrowserDimensions();
//     if (dimensions) {
//       dispatch({
//         ...dimensions,
//         type: BROWSER_RESIZE,
//       });
//     }
//   };
// };

// // export const closeWindow = (windowId) => {
// //   return (dispatch, getState) => {
// //     const type = getWindow(getState(), windowId).type;
// //     try {
// //       switch (type) {
// //         case "Query": {
// //           dispatch(closeQuery(windowId));
// //           break;
// //         }
// //         case "Results": {
// //           dispatch(closeQueryResults(windowId));
// //           break;
// //         }
// //         case "Details": {
// //           dispatch(closeDetails(windowId));
// //           break;
// //         }
// //         default:
// //           break;
// //       }
// //       return dispatch(closeWindowInner(windowId));
// //     } catch (e) {
// //       toast(e.message, { type: "info" });
// //     }
// //   };
// // };

// export const openQuery = (searchId) => {
//   return (dispatch, getState) => {
//     // if (getWindowCount(getState(), "Query") < QUERY_LIMIT) {
//     const windowId = cuid();
//     // dispatch(newWindow(windowId, "Query"));
//     // dispatch(constructNewQuery(windowId, searchId));
//   };
//   // else {
//   //   toast(`Only up to ${QUERY_LIMIT} queries can be open at a time`, {
//   //     type: "info",
//   //   });
//   // }
// // };
// // };

// // export const openResults = (queryId) => {
// //   return (dispatch, getState) => {
// //     if (getWindowCount(getState(), "Results") < RESULTS_LIMIT) {
// //       const windowId = cuid();
// //       dispatch(newWindow(windowId, "Results"));
// //       return dispatch(createQueryResults(windowId, queryId));
// //     } else {
// //       toast(`Only up to ${RESULTS_LIMIT} results can be open at a time`, {
// //         type: "info",
// //       });
// //     }
// //   };
// // };

// // export const openDetails = (keyType, key, requestKeys, searchId, resultsId) => {
// //   return (dispatch, getState) => {
// //     if (getWindowCount(getState(), "Details") < DETAILS_LIMIT) {
// //       const windowId = cuid();
// //       dispatch(newWindow(windowId, "Details"));
// //       return dispatch(
// //         createDetails(windowId, keyType, key, requestKeys, searchId, resultsId)
// //       );
// //     } else {
// //       toast(
// //         `Only up to ${DETAILS_LIMIT} detail windows can be open at a time`,
// //         {
// //           type: "info",
// //         }
// //       );
// //     }
// //   };
// // };

// const getBrowserDimensions = () => {
//   const sideBElements = document.getElementsByClassName("sideB");
//   if (sideBElements.length > 0) {
//     const { offsetWidth, offsetHeight } = sideBElements[0];
//     return { width: offsetWidth, height: offsetHeight };
//   }
// };

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import cuid from "cuid";

// export const openQuery = createAsyncThunk(
//   "window/openQuery",
//   (rejectWithValue) => {
//     try {
//       const windowId = cuid();
//       const type = "Query";
//       return { windowId, type };
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
