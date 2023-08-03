import React, { useEffect, useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../API/Api';


function EditMeeting() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [meeting, setMeeting] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    organizer: '',
  });

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await axios.get(`${BACKEND_BASE_URL}/meeting/meetings/${id}`);
        setMeeting(response.data);
        console.log("Meeting data:", response.data);
        // Set the form data with the fetched meeting data
        setFormData({
          title: response.data.title,
          description: response.data.description,
          date: response.data.date,
          start_time: response.data.start_time,
          end_time: response.data.end_time,
          organizer: response.data.organizer,
        });
      } catch (error) {
        console.error('Error fetching meeting data:', error);
      }
    };

    fetchMeetingData();
  }, [id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a PUT request to update the meeting data
      await axios.put(`${BACKEND_BASE_URL}/meeting/meetings/${id}/`, formData);
     
    
      Navigate("/meeting")
    } catch (error) {
      console.error('Error updating meeting:', error);
    }
  };

  if (!meeting) {
    return <div>Loading...</div>;
  }






  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Edit Meeting</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={meeting.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label>Description</label>
          <textarea
            name="description"
            defaultValue={meeting.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label>Date</label>
          <input
            type="date"
            name="date"
            defaultValue={meeting.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label>Starting Time</label>
            <input
              type="time"
              name="start_time"
              defaultValue={meeting.start_time}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label>Ending Time</label>
            <input
              type="time"
              name="end_time"
              defaultValue={meeting.end_time}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label>Organizer</label>
          <input
            type="text"
            name="organizer"
            defaultValue={meeting.organizer_details.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update Meeting
        </button>
      </form>
    </div>
  );
}

export default EditMeeting;
