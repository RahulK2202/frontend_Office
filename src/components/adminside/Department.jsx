import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dumy from "../../pages/Dumy";
import { BACKEND_BASE_URL } from "../../API/Api";

function Department() {
  const [department, setDepartment] = useState([]);

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
      await axios.delete(`${BACKEND_BASE_URL}/user/departments/${id}/`);
      console.log('Department deleted successfully');
  
      // Remove the deleted department from the state
      setDepartment((prevDepartments) => prevDepartments.filter(dept => dept.id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };
  




  

  return (
    <div>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
            Department List
          </div>
          <td>
            <br />
            <Dumy onDepartmentAdded={handleDepartmentAdded} />
          </td>
          <br />
          <div className="p-3">
            <table className="table-responsive w-full rounded">
              <thead>
                <tr>
                  <th className="border  px-4 py-2">Id</th>
                  <th className="border w-1/2 px-4 py-2">Department Name</th>
                  <th className="border w-1/2 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2"></td>
                </tr>

                {department.map((dept) => (
                  <tr key={dept.id}>
                    <td className="border px-4 py-2">{dept.id}</td>
                    <td className="border px-4 py-2">{dept.name}</td>
                    {/* <td className="border px-4 py-2">
                      <Link
                        to={`/editemployee/${dept.id}`}
                        className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
                        onClick={() => handleDepartmentDeleted(dept.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td> */}

<td className="border px-4 py-2 flex">
                    

{/* <Link
  to={{
    pathname: `/editdepartment/${dept.id}`,
    state: { departmentId: dept.id, departmentName: dept.name },
  }}
  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white"
>
  <i className="fas fa-edit"></i>
</Link> */}



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
        </div>
      </div>
    </div>
  );
}

export default Department;
