import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: { resume: false },
  reducers: {
    isResumeAdded(state) {
      state.resume = true;
    },
    resumeRemoved(state) {
      state.resume = false;
    },
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice;
