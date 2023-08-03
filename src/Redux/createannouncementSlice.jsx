import { createSlice } from "@reduxjs/toolkit";

const createannouncementSlice = createSlice({
  name: "createannouncement",
  initialState: {
    event: "",
    notes: "",
  },
  reducers: {
    updateEvent: (state, action) => {
      state.event = action.payload;
    },
    updateNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { updateEvent, updateNotes } = createannouncementSlice.actions;
export default createannouncementSlice.reducer;
