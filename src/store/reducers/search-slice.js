import { createSlice } from "@reduxjs/toolkit";

const jobSearchSlice = createSlice({
  name: "search",
  initialState: { searchResult: "" },
  reducers: {
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const jobSearchActions = jobSearchSlice.actions;

export default jobSearchSlice;
