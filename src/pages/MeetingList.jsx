import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('/api/meetings/');
      setMeetings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Meeting List</h1>
      {meetings.map((meeting) => (
        <div key={meeting.id}>
          <h3>{meeting.title}</h3>
          <p>{meeting.description}</p>
          <p>Date: {meeting.date}</p>
          <p>Time: {meeting.start_time} - {meeting.end_time}</p>
          <p>Room: {meeting.room}</p>
          <p>Organizer: {meeting.organizer}</p>
        </div>
      ))}
    </div>
  );
};

export default MeetingList;
