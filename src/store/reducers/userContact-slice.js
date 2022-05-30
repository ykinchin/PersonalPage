import { createSlice } from "@reduxjs/toolkit";

const userContactSlice = createSlice({
  name: "userContact",
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts];
      if (action.payload !== "" && !state.contacts.includes(action.payload)) {
        state.contacts.push(action.payload);
      }
    },
    removeContact(state, action) {
      const contacts = state.contacts.filter((contact) => contact !== action.payload);
      state.contacts = contacts;
    },
  },
});

export const userContactActions = userContactSlice.actions;

export default userContactSlice;
