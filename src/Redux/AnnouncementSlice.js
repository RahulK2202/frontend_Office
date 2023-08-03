// import { createSlice } from "@reduxjs/toolkit";

// const announcementSlice = createSlice({
//   name: "announcement",
//   initialState: {
//     announcements: [],
//   },
//   reducers: {
//     updateAnnouncements: (state, action) => {
//       state.announcements = action.payload;
//     },
//     addAnnouncement: (state, action) => {
//       state.announcements.push(action.payload);
//     },
//     updateAnnouncement: (state, action) => {
//       const { id, data } = action.payload;
//       const index = state.announcements.findIndex(
//         (announcement) => announcement.id === id
//       );
//       if (index !== -1) {
//         state.announcements[index] = { ...state.announcements[index], ...data };
//       }
//     },
//     deleteAnnouncement: (state, action) => {
//       const id = action.payload;
//       state.announcements = state.announcements.filter(
//         (announcement) => announcement.id !== id
//       );
//     },
//   },
// });

// export const {
//   updateAnnouncements,
//   addAnnouncement,
//   updateAnnouncement,
//   deleteAnnouncement,
// } = announcementSlice.actions;

// export default announcementSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnnouncements = createAsyncThunk(
  'announcement/fetchAnnouncements',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/announcements/');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const announcementSlice = createSlice({
  name: 'announcement',
  initialState: {
    announcements: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default announcementSlice.reducer;
