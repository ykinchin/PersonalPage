import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: { skills: [] },
  reducers: {
    addSkill(state, action) {
      state.skills = [...state.skills];
      if (action.payload !== "" && !state.skills.includes(action.payload)) {
        state.skills.push(action.payload);
      }
    },
    removeSkill(state, action) {
      const arr = state.skills.filter((skill) => skill !== action.payload);
      state.skills = arr;
    },
  },
});

export const skillsActions = skillsSlice.actions;

export default skillsSlice;
