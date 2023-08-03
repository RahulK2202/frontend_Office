import axios from 'axios';
import { BACKEND_BASE_URL } from '../API/Api';



export const fetchMeetingData = async () => {
  try {
    const response = await axios.get(`${BACKEND_BASE_URL}/meeting/meetings/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching meeting data:', error);
    return []; // Return an empty array or handle the error as needed
  }
};
