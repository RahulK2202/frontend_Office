import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_BASE_URL } from '../../API/Api';
import { Triangle } from 'react-loader-spinner';



function AdminLeaveTable() {
    const [leaves, setLeaves] = useState([]);
  const Navigate = useNavigate();

  const [showSpinner, setShowSpinner] = useState(false);


  useEffect(() => {
  
    fetchLeaves();
  }, []);




const fetchLeaves = () => {
    axios
      .get(`${BACKEND_BASE_URL}/leave/leaves/`)  // Replace this with the actual endpoint URL
      .then((response) => {

       
         
        setLeaves(response.data);
        // setApproved(response.data[0].is_approved)
      })
      .catch((error) => {
        console.error('Error fetching leaves:', error);
      });
  };

// const email=leaves.employee.email
// console.log(email,"emsaillllllllll");

  const handleApproveReject = (leaveId, isApproved,email) => {
    const data = { leave_id: leaveId, is_approved: isApproved,email:email };
  
    // Show the Swal alert based on the value of isApproved
    const confirmMessage = isApproved
      ? 'Are you sure you want to approve this leave?'
      : 'Are you sure you want to reject this leave?';
  
    Swal({
      title: 'Confirmation',
      text: confirmMessage,
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        // User clicked Confirm, proceed with the API call
        
        setShowSpinner(true)
        console.log(showSpinner,'------spinnerr');

        axios
          .put(`${BACKEND_BASE_URL}/leave/leaves/`, data)
          .then((response) => {
           
            // Refresh the leave requests after successful update
            fetchLeaves();
          })
          .catch((error) => {
            console.error('Error updating leave request status:', error);
          })

          .finally(() => {
            // This will be executed after the request completes, whether it was successful or not
            setShowSpinner(false);
          });
      } else {
        // User clicked Cancel, do nothing
        console.log('User canceled the action.');
      }
   
    });
  };




  return (

    <div>

<div>
    <div className="relative flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
        Leave List
        </div>

        {( showSpinner  &&

            <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-opacity-70 bg-white">
              <Triangle
                  height="80"
                  width="80"
                  color="#4fa94d"
                 ariaLabel="triangle-loading"
                        />
                    </div>
                        )}





        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">Employee name</th>
                <th className="border w-1/4 px-4 py-2">Email</th>
                <th className="border w-1/4 px-4 py-2"> Deparment</th>
                <th className="border w-1/6 px-4 py-2">Reason for leave</th>
                {/* <th className="border w-1/6 px-4 py-2">date</th> */}
                <th className="border w-1/6 px-4 py-2">Start_date</th>
                <th className="border w-1/6 px-4 py-2">End_time</th>
                <th className="border w-1/5 px-4 py-2">Status</th>
                <th className="border w-1/5 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
            {leaves.map((leave) => (
            <tr key={leave.id}>
            
              <td className="border px-4 py-2">{leave.id}</td>
              <td className="border px-4 py-2">{leave.employee.username}</td>
              <td className="border px-4 py-2">{leave.employee.email}</td>
              <td className="border px-4 py-2">{leave.department.name}</td>
              <td className="border px-4 py-2">{leave.reason}</td>
              <td className="border px-4 py-2">{leave.start_date}</td>
              <td className="border px-4 py-2">{leave.end_date}</td>

              <td className="border px-4 py-2">
                  {leave.is_approved === true
                      ?  <span className="text-green-900 font-bold">Approved</span>
                      : leave.is_approved === false
                        ? <span className="text-red-900 font-bold">Rejected</span>
                        : "Pending"}
              </td>
              <td className="border px-4 py-2 ">







                
        { leave.is_approved === null ? (           

  <div>
    <button
     onClick={(e) => handleApproveReject(leave.id, true,leave.employee.email)}
      className="bg-green-500 cursor-pointer rounded p-1 mx-1 text-white"
    >
      Approve
    </button>
    <button
      onClick={(e) => handleApproveReject(leave.id, false,leave.employee.email)}
      className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
    >
      Reject
    </button>
  </div>
      ) : ( 
      <div className='w-full h-full'></div>
  //  <div>
  //   { leave.is_approved === true ? (
  //   <span className="text-green-500">Approved</span>

  //   ) : (
  //   <span className="text-red-500">Rejected</span>
  //   ) }
  // </div> 
)} 

                  </td>
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

export default AdminLeaveTable
