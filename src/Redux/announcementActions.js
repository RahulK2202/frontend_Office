// announcementActions.js
import axios from 'axios';

export const fetchAnnouncements = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/user/announcements/');
      const announcements = response.data;

      dispatch(setAnnouncements(announcements));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setAnnouncements = (announcements) => ({
  type: 'SET_ANNOUNCEMENTS',
  payload: announcements,
});
