import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKEND_BASE_URL } from '../../API/Api';
import ReactPaginate from 'react-paginate';
import Pagination from '../../Pagination/Pagination'
import LoginUserModal from '../userside/LoginUserModal';

function UserList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  // const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };


  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;
  const paginatedData = employees.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(employees.length / itemsPerPage);

  const filteredData = paginatedData.filter((employee) => {
    const EmployeeNameMatch = employee.first_name.toLowerCase().includes(search.toLowerCase());
    return EmployeeNameMatch ;
  });




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_BASE_URL}/user/employelist/`);
        setEmployees(response.data);
        console.log("12",response.data)
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

const BlockModal = ({ employeeId, isBlocked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShouldReload(true);
  };

  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
      setShouldReload(false);
    }
  }, [shouldReload]);

  const handleBlockEmployee = () => {
    setIsOpen(false);
    blockEmployee(employeeId);
    window.location.reload();
  };

  const handleUnblockEmployee = () => {
    setIsOpen(false);
    unblockEmployee(employeeId);
    window.location.reload();
  };

  const blockEmployee = (employeeId) => {
    axios
      .put(
      `${BACKEND_BASE_URL}/user/blockemployees/${employeeId}/`)
      .then(response => {
        console.log('Employee blocked successfully');
      })
      .catch(error => {
        console.error('Error blocking employee:', error);
      });
  };
  

  const unblockEmployee = (employeeId) => {
    axios
      .put(`${BACKEND_BASE_URL}/user/unblockemployees/${employeeId}/`)
      .then(response => {
        console.log('Employee unblocked successfully');
      })
      .catch(error => {
        console.error('Error unblocking employee:', error);
      });
  };
  

  return (
    <div>
      <button
        onClick={openModal}
        className="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isBlocked ? 'Unblock' : 'Block'}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-64 p-6 rounded shadow-lg">
            <div className="text-gray-800 mb-4">
              {isBlocked
                ? 'Are you sure you want to unblock this employee?'
                : 'Are you sure you want to block this employee?'}
            </div>
            <div className="flex justify-end">
              {isBlocked ? (
                <button
                  onClick={handleUnblockEmployee}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Yes
                </button>
              ) : (
                <button
                  onClick={handleBlockEmployee}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Yes
                </button>
              )}
              <button
                onClick={closeModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
return (
  <div>
    <div className="flex flex-1 w-full h-full flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
          Employee List
        </div>
<br/>

<LoginUserModal/>
<br/>
        <div className="flex">
            <label className="mr-2">Search Employee:</label>
            <input
              type="text"
              className="appearance-none block bg-white-200 text-gray-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
              id="Search"
              name="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>





          {filteredData.length > 0 ? (
        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">Employee Name</th>
                <th className="border w-1/6 px-4 py-2">Department</th>
                <th className="border w-1/6 px-4 py-2">Contact Number</th>
                <th className="border w-1/6 px-4 py-2">Email Address</th>
                <th className="border w-1/6 px-4 py-2">Designation</th>
                <th className="border w-1/5 px-4 py-2">Actions</th>
              </tr>
            </thead>



            <tbody>




              {filteredData.map((employee) => (
                <tr key={employee.id}>
                  <td className="border px-4 py-2">{employee.id} </td>

                  <td className="border px-4 py-2">{employee.first_name} {employee.last_name}</td>
                  <td className="border px-4 py-2">{employee.department_name}</td>
                  <td className="border px-4 py-2">{employee.phone}</td>
                  <td className="border px-4 py-2">{employee.email}</td>
                  <td className="border px-4 py-2">{employee.designation} </td>
                  <td className="border px-4 py-2 flex">
                    {/* <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                      <i className="fas fa-eye"></i>
                    </a> */}

                    <Link
  to={`/employeedit/${employee.id}`}
  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white"
>
  <i className="fas fa-edit"></i>
</Link>

                    {/* <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                      <i className="fas fa-trash"></i>
                    </a> */}
                    <BlockModal employeeId={employee.id} isBlocked={employee.is_blocked}  /> {/* Move the BlockModal component here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>

        ) : (
          <p>No Employees found.</p>
        )}

      </div>
    </div>
  </div>
);
}

export default UserList;