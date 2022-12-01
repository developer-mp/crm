// // import { createSlice } from "@reduxjs/toolkit";
// import {
//   NEW_WINDOW,
//   CLOSE_WINDOW,
//   ACTIVATE_WINDOW,
//   TOP_WINDOW,
//   POSITION_WINDOW,
//   SIZE_WINDOW,
//   BROWSER_RESIZE,
//   MINIMIZE_WINDOW,
//   MAXIMIZE_WINDOW,
//   SET_WINDOW_TITLE,
//   OPEN_WINDOW_CONFIRMATION,
//   CLOSE_WINDOW_CONFIRMATION,
// } from "../actions/window.js";
// import produce from "immer";
// import pkg from "lodash";
// const { countBy, pull, each, endsWith } = pkg;

// const MIN_WIDTH = 730;
// const MIN_HEIGHT = 350;

// const initialState = {
//   byId: {},
//   allIds: [],
//   zIndex: 0,
//   focusedWindow: null,
// };

// const initialWindow = {
//   title: "",
//   name: "",
//   zIndex: 0,
//   visible: true,
//   position: { x: 400, y: 10 },
//   size: { width: MIN_WIDTH, height: MIN_HEIGHT },
//   loading: false,
//   confirmation: null,
// };

// const resizeWindow = (window, browserHeight, browserWidth) => {
//   const xEnd = window.position.x + window.size.width;
//   const yEnd = window.position.y + window.size.height;
//   if (xEnd > browserWidth - 10) {
//     window.posiiton.x =
//       Math.floor(Math.max(window.position.x + browserWidth - xEnd, 0)) - 10;
//     window.size.width = browserWidth - window.position.x - 10;
//   }
//   if (window.size.width < MIN_WIDTH) {
//     window.size.width = Math.min(
//       MIN_WIDTH,
//       browserWidth - window.position.x - 10
//     );
//   }

//   if (yEnd > browserHeight) {
//     window.position.y = Math.floor(
//       Math.max(window.position.y + browserHeight - yEnd, 0)
//     );
//     window.size.height = browserHeight - window.position.y;
//   } else if (window.size.height < MIN_HEIGHT) {
//     window.size.height = Math.min(
//       MIN_HEIGHT,
//       browserHeight - window.position.y
//     );
//   }
// };

// const getWindowId = (action) =>
//   action.queryId || action.resultsId || action.detailsId;

// const nextFocusTarget = (windows) => {
//   let maxzIndex = 0;
//   let maxWindowId = null;
//   each(windows, (window, windowId) => {
//     if (window.visible && window.zIndex > maxzIndex) {
//       maxWindowId = windowId;
//       maxzIndex = window.zIndex;
//     }
//   });
//   return maxWindowId;
// };

// const window = produce((draft, action) => {
//   switch (action.type) {
//     case NEW_WINDOW: {
//       draft.byId[action.windowId] = { ...initialWindow };
//       draft.allIds.push(action.windowId);
//       draft.byId[action.windowId].position = { x: action.width / 4, y: 10 };
//       draft.byId[action.windowId].zIndex = draft.zIndex + 1;
//       draft.zIndex++;
//       draft.focusWindow = action.windowId;
//       return;
//     }
//     case CLOSE_WINDOW: {
//       delete draft.byId[action.windowId];
//       pull(draft.allIds, action.windowId);
//       draft.focusWindow = nextFocusTarget(draft.byId);
//       return;
//     }
//     case ACTIVATE_WINDOW: {
//       const window = draft.byId[action.windowId];
//       const zInd = draft.zIndex + 1;
//       if (draft.focusedWindow === action.windowId) {
//         window.visible = false;
//         draft.focusedWindow = action.windowId;
//       }
//       window.zIndex = window.visible ? zInd : 0;
//       draft.zIndex = window.visible ? zInd : zInd - 1;
//       return;
//     }
//     case MINIMIZE_WINDOW: {
//       const window = draft.byId[action.windowId];
//       window.visible = false;
//       window.zIndex = 0;
//       if (draft.focusedWindow === action.windowId) {
//         draft.focusedWindow = nextFocusTarget(draft.byId);
//       }
//       return;
//     }
//     case TOP_WINDOW: {
//       const window = draft.byId[action.windowId];
//       const zInd = draft.zIndex + 1;
//       window.zIndex = zInd;
//       draft.zIndex = zInd;
//       draft.focusedWindow = action.windowId;
//       return;
//     }
//     case POSITION_WINDOW: {
//       const window = draft.byId[action.windowId];
//       window.position.x = action.position.x;
//       window.position.y = action.position.y;
//       return;
//     }
//     case SIZE_WINDOW: {
//       const window = draft.byId[action.windowId];
//       const w = Math.max(
//         parseInt(action.size.width.replace("px", "")),
//         MIN_WIDTH
//       );
//       const h = Math.max(
//         parseInt(action.size.height.replace("px", "")),
//         MIN_HEIGHT
//       );
//       window.size.width = w;
//       window.size.height = h;
//       window.position.x = action.position.x;
//       window.position.y = action.position.y;

//       const zInd = draft.zIndex + 1;
//       if (window.zIndex !== draft.zIndex) {
//         window.zIndex = zInd;
//         draft.zIndex = zInd;
//       }
//       return;
//     }
//     case BROWSER_RESIZE: {
//       each(draft.allIds, (windowId) => {
//         resizeWindow(draft.byId[windowId], action.height, action.width);
//       });
//       return;
//     }
//     case MAXIMIZE_WINDOW: {
//       const window = draft.byId[action.windowId];
//       window.size.width = Math.floor(action.width * 0.75 - 10);
//       window.size.height = action.height;
//       window.position.x = Math.floor(action.width * 0.25);
//       window.position.y = 0;
//       return;
//     }
//     case SET_WINDOW_TITLE: {
//       draft.byId[action.windowId].name = action.name;
//       draft.byId[action.windowId].title = action.title;
//       return;
//     }
//     // case SERVER_ERROR: {
//     //   if (action.windowId) {
//     //     draft.byId[action.windowId].loading = false;
//     //   }
//     //   return;
//     // }
//     case OPEN_WINDOW_CONFIRMATION: {
//       draft.byId[action.windowId].confirmation = action.confirmation;
//       return;
//     }
//     case CLOSE_WINDOW_CONFIRMATION:
//       {
//         draft.byId[action.windowId].confirmation = null;
//       }
//       break;
//     default:
//       const windowId = getWindowId(action);
//       if (windowId) {
//         if (endsWith(action.type, "REQUEST")) {
//           draft.byId[windowId].loading = true;
//         } else if (endsWith(action.type, "RECEIVED")) {
//           if (
//             draft.byId[windowId] !== undefined &&
//             draft.byId[windowId].loading !== undefined
//           )
//             draft.byId[windowId].loading = false;
//         }
//       }
//       return;
//   }
// }, initialState);

// export default window;

// export const getWindow = (state, windowId) => state.byId[windowId];

// export const getWindowCount = (type) => {
//   // const windowCount = countBy(byId, (window) => window.type);
//   // return windowCount[type || 0];
// };

import { createSlice } from "@reduxjs/toolkit";
import { openQuery } from "../actions/window.js";

const initialState = {
  loading: false,
  windowId: "",
  type: "",
  error: null,
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(openQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(openQuery.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.windowId = payload;
      state.type = payload;
    });
    builder.addCase(openQuery.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default windowSlice.reducer;
