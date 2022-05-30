import { createSlice } from "@reduxjs/toolkit";

const jobIdSlice = createSlice({
  name: "jobId",
  initialState: { jobId: null, markedJobs: [] },
  reducers: {
    setJobId(state, action) {
      state.jobId = action.payload;
    },

    addJob(state, action) {
      if (!state.markedJobs.includes(action.payload)) {
        state.markedJobs.push(action.payload);
      }
    },

    removeJob(state, action) {
      const arr = state.markedJobs.filter((id) => id !== action.payload);
      state.markedJobs = arr;
    },
  },
});

export const jobIdActions = jobIdSlice.actions;

export default jobIdSlice;
