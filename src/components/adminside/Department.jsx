import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../API/Api";
import Swal from 'sweetalert2';
import Pagination from '../../Pagination/Pagination'; // Make sure to adjust the import path

function Department() {
  const [department, setDepartment] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 3;

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/user/departments/`);
      setDepartment(response.data);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  const handleDepartmentAdded = (newDepartment) => {
    setDepartment([...department, newDepartment]);
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Do you really want to delete this department?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
      });
  
      if (result.isConfirmed) {
        await axios.delete(`${BACKEND_BASE_URL}/user/departments/${id}/`);
        console.log('Department deleted successfully');
  
        // Remove the deleted department from the state
        setDepartment((prevDepartments) => prevDepartments.filter(dept => dept.id !== id));
      }
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  const filteredDepartments = department.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredDepartments.length / itemsPerPage);
  const displayedDepartments = filteredDepartments.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
            Department List
          </div>
          <div className="mb-4 mt-2 px-2">
            <input
              type="text"
              placeholder="Search by Department Name"
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border rounded w-full"
            />
          </div>
          <div className="p-3">
            <table className="table-responsive w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Id</th>
                  <th className="border w-1/2 px-4 py-2">Department Name</th>
                  <th className="border w-1/2 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedDepartments.map((dept) => (
                  <tr key={dept.id}>
                    <td className="border px-4 py-2">{dept.id}</td>
                    <td className="border px-4 py-2">{dept.name}</td>
                    <td className="border px-4 py-2 flex">
                      <button
                        onClick={() => handleDelete(dept.id)}
                        className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
