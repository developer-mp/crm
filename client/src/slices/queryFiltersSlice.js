import { createSlice } from "@reduxjs/toolkit";
import { fetchQueryFilters } from "../actions/searchAction.js";

const initialState = {
  queryFiltersItems: [],
};

const queryFiltersSlice = createSlice({
  name: "queryFilters",
  initialState,
  reducers: {
    queryFiltersItems(state, action) {
      state.queryFiltersItems = action.payload;
    },
  },
});

// export const { queryFiltersItems } = queryFiltersSlice.actions;

// const fetchFilters = () => async (dispatch) => {
//   const response = await usersAPI.fetchAll();
//   dispatch(queryFiltersItems(response.data));
// };

// const queryFiltersSlice = createSlice({
//   name: "queryFilters",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchQueryFilters.pending, (state) => {
//       state.queryFiltersItems = [];
//     });
//     builder.addCase(fetchQueryFilters.fulfilled, (state, { payload }) => {
//       state.queryFiltersItemsqueryFiltersItems?.filterList = payload;
//     });
//     builder.addCase(fetchQueryFilters.rejected, (state) => {
//       state.queryFiltersItems = [];
//     });
//   },
// });

export default queryFiltersSlice.reducer;
