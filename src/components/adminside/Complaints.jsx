import React, { useState, useEffect } from 'react'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { BACKEND_BASE_URL } from '../../API/Api'



function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/complaint/complaints/`);

      
      setComplaints(response.data);
      
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch complaints');
    }
  };


  const updateStatus = async (complaintId, newStatus) => {
    try {
      const response = await axios.patch(`${BACKEND_BASE_URL}/complaint/complaints/${complaintId}/`, {
        status: newStatus,
      });
      
      // Update the complaints list after successful update
      fetchComplaints();
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500 text-white';
      case 'In Progress':
        return 'bg-blue-500 text-white';
      case 'Resolved':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };




  return (
    <div>
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Complaints List</h1>
    
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 font-semibold text-gray-800">id</th>
              
              <th className="px-4 py-2 font-semibold text-gray-800">Employee Name</th>


              <th className="px-4 py-2 font-semibold text-gray-800">Email</th>
              <th className="px-4 py-2 font-semibold text-gray-800">description</th>
              <th className="px-4 py-2 font-semibold text-gray-800">Status</th>
              {/* <th className="px-4 py-2 font-semibold text-gray-800">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-center">
          {complaints.map((complaint) => (
            <tr key={complaint.id} className="bg-white" style={{ paddingBottom: '0.5rem'}}>
                


                <td className="px-4 py-2 border-b">
                  <div className="flex items-center justify-center">
                  <p className="font-medium">{complaint.id}</p>
                  </div>
                </td>


                <td className="px-4 py-2 border-b">{complaint.employee.username}</td>
                <td className="px-4 py-2 border-b">{complaint.employee.email}</td>
                <td className="px-4 py-2 border-b">{complaint.description}</td>

                
                <td>
  {complaint.status === 'Resolved' ? (
    <span className={`status-resolved ${getStatusColor(complaint.status)}`}>
      Resolved
    </span>
  ) : (
    <select
      value={complaint.status}
      onChange={(event) => updateStatus(complaint.id, event.target.value)}
      className={`status-select ${getStatusColor(complaint.status)}`}
    >
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Resolved">Resolved</option>
    </select>
  )}
</td>


              
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer /> 
    </div>
    </div>
  )



}

export default Complaints