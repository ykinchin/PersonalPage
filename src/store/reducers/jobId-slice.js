import { createSlice } from "@reduxjs/toolkit";

const jobIdSlice = createSlice({
  name: "jobId",
  initialState: { jobId: "111" },
  reducers: {
    setJobId(state, action) {
      state.jobId = action.payload;
      console.log(state.jobId)
    },
  },
});

export const jobIdActions = jobIdSlice.actions;

export default jobIdSlice;
