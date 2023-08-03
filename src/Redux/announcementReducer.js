// announcementReducer.js
const initialState = {
    announcements: [],
  };
  
  const announcementReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ANNOUNCEMENTS':
        return {
          ...state,
          announcements: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default announcementReducer;
  