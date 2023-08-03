import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { BACKEND_BASE_URL } from '../../API/Api';
import axios from 'axios';

function UserApplied() {
  const { user } = useContext(AuthContext);
  const [leave, setLeave] = useState([]);

  useEffect(() => {
    const fetchUserLeaveRequests = async () => {
      try {
        const userId = user.user_id;
       
        const response = await axios.get(`${BACKEND_BASE_URL}/leave/employee_leave_requests/${userId}/`);
        const data = response.data;
        console.log(data, "reachedd");
        if (data.length > 0) {
          setLeave(data);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.error('Error fetching user leave requests:', error);
      }
    };
  
    fetchUserLeaveRequests();
  }, [user]);
  

  return (
    <div>
      <div>
        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">leave types</th>
                <th className="border w-1/4 px-4 py-2">Reason for leave</th>
                <th className="border w-1/4 px-4 py-2">Date</th>
                <th className="border w-1/6 px-4 py-2">Start_date</th>
                <th className="border w-1/6 px-4 py-2">End_date</th>
                <th className="border w-1/6 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {leave.map((request) => (
                <tr key={request.id}>
                  <td className="border px-4 py-2">{request.id}</td>
                  <td className="border px-4 py-2">{request.leave_type}</td>
                  <td className="border px-4 py-2">{request.reason}</td>
                  <td className="border px-4 py-2">
                    {request.start_date} to {request.end_date}
                  </td>
                  <td className="border px-4 py-2">{request.start_date}</td>
                  <td className="border px-4 py-2">{request.end_date}</td>
                  <td className="border px-4 py-2">
  {request.is_approved === true && (
    <span style={{ color: 'green',fontWeight: 'bold' }}>Approved</span>
  )}
  {request.is_approved === false && (
    <span style={{ color: 'red',fontWeight: 'bold' }}>Rejected</span>
  )}
  {request.is_approved === null && (
    <span style={{ color: 'orange',fontWeight: 'bold' }}>Pending</span>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserApplied;
