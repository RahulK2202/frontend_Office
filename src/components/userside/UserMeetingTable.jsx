import React, { useEffect, useState } from 'react';

import { fetchMeetingData } from '../../data/meetingApi';

import {  useNavigate } from 'react-router-dom';



function UserMeetingTable({refresh, setRefresher}) {
  const [meeting, setMeeting] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMeetingData();
      setMeeting(data);
    };

    fetchData();
  },[refresh]);



  return (

    <div>

<div>
    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
          Meeting List
        </div>
        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">Organizer</th>
                <th className="border w-1/4 px-4 py-2"> Meeting</th>
                <th className="border w-1/6 px-4 py-2">Description</th>
                <th className="border w-1/6 px-4 py-2">date</th>
                <th className="border w-1/6 px-4 py-2">Start_time</th>
                <th className="border w-1/6 px-4 py-2">End_time</th>
                {/* <th className="border w-1/5 px-4 py-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {meeting.map((meeting) => (
                <tr key={meeting.id}>
                  <td className="border px-4 py-2">{meeting.id} </td>

                  <td className="border px-4 py-2">{meeting.organizer_details.username 
} </td>
                  <td className="border px-4 py-2">{meeting.title}</td>
                  <td className="border px-4 py-2">{meeting.description}</td>
                  <td className="border px-4 py-2">{meeting.date}</td>
                  <td className="border px-4 py-2">{meeting.start_time}</td>
                  <td className="border px-4 py-2">{meeting.end_time} </td>
                  {/* <td className="border px-4 py-2 flex">
                    

                  <Link to={`/editmeeting/${meeting.id}`} className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
  <i className="fas fa-edit"></i>
</Link>

<button
    onClick={() => handleDelete(meeting.id)}
    className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
  >
    <i className="fas fa-trash"></i>
  </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


      
    </div>
  )
}

export default UserMeetingTable
