// import { configureStore } from "@reduxjs/toolkit";
// import AnnouncementSlice from "./AnnouncementSlice.js";
// import createannouncementSlice from "./createannouncementSlice.jsx";

// export default configureStore({
//   reducer: {
//     announcement: AnnouncementSlice,
//     createannouncement: createannouncementSlice,
//     // ...other reducers
//   },
// });


// Redux store configuration

import { createStore } from 'redux';
import announcementReducer from './announcementReducer';

const store = createStore(announcementReducer);

export default store;
