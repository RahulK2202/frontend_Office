// Import necessary modules from React Big Calendar
import React, { useEffect, useState,useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';
import AuthContext from '../Contexts/AuthContext';
import { BACKEND_BASE_URL } from '../../API/Api';
import UserLeave from '../userside/UserLeave';


const UserCalendar = () => {
 
  const localizer = momentLocalizer(moment);
  const { user } = useContext(AuthContext);
  
console.log( user,"......vbvbbvb...........")

  const [isLoading, setIsLoading] = useState(true);
  const [leaveData, setLeaveData] = useState([]);




  useEffect(() => {
    if (user) {
      fetchLeaveData();
    } else {
      setIsLoading(false);
    }
  }, [user]);



  const fetchLeaveData = () => {
    const employeeId = user?.user_id || null;
    console.log(employeeId, '.............');

    axios
  .get(`${BACKEND_BASE_URL}/leave/userleave/${employeeId}/`)
  .then((response) => {
    console.log(response.data, 'got response');
    setLeaveData(response.data);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error('Error fetching leaves:', error);
    setIsLoading(false);
  });
  };

  const transformLeaveData = () => {
   
    const events = leaveData.map((leave) => ({
      id: leave.id,
      title: "Leave these days", 
      start: new Date(leave.start_date),
      end: new Date(leave.end_date),
      allDay: true, 
      resource: leave.is_approved ? 'approved' : 'rejected', 
    }));

    return events;
  };

  
  const events = transformLeaveData();

  return (
    <div>
   
 <UserLeave/> 
   <br/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} 
      />
    </div>
  );
};

export default UserCalendar;
