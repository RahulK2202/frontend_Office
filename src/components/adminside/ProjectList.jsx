import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from './../../API/Api';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import AddProject from './AddProject';

function ProjectList() {

  const [project, setProject] = useState([]);
  const [refresh,setRefresh]=useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectData();
      setProject(data);
    };

    fetchData();
  }, [refresh]);

  

 const fetchProjectData = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/project/projects/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Project data:', error);
      return []; // Return an empty array or handle the error as needed
    }
  };

// console.log(response.data,"cominggggg");



const handleDelete = async (id) => {
  try {
    // Show a confirmation dialog
    const result = await Swal.fire({
      title: 'Do you really want to delete this project?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
    });

    // If the user confirms the deletion
    if (result.isConfirmed) {
      await axios.delete(`${BACKEND_BASE_URL}/project/projects/${id}/`);
      console.log('Project deleted successfully');

      // Remove the deleted project from the state
      setProject((prevProject) => prevProject.filter((project) => project.id !== id));

      // Show a success toast after successful deletion
      Swal.fire('Deleted!', 'Project has been deleted.', 'success');
    }
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};

const handleAdminChange = () => {
  setRefresh((prevRefresh) => !prevRefresh);
};

  return (


    <div>
       <AddProject onChange={handleAdminChange}/> 
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
         Project List
        </div>
        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">Project Name</th>
                
                <th className="border w-1/6 px-4 py-2">Description</th>
             
                <th className="border w-1/6 px-4 py-2">Start date</th>
                <th className="border w-1/6 px-4 py-2">End date</th>
                <th className="border w-1/5 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {project.map((project) => (
                <tr key={project.id}>
                  <td className="border px-4 py-2">{project.id} </td>

                  {/* <td className="border px-4 py-2">{project.organizer_details.username 
} </td> */}
                  <td className="border px-4 py-2">{project.name}</td>
                  <td className="border px-4 py-2">{project.description}</td>
                  {/* <td className="border px-4 py-2">{project.date}</td> */}
                  <td className="border px-4 py-2">{project.start_date}</td>
                  <td className="border px-4 py-2">{project.end_date
} </td>
                  <td className="border px-4 py-2 flex">
                    

                  {/* <Link to={`/editproject/${project.id}`} className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
  <i className="fas fa-edit"></i>
</Link> */}



<button
    onClick={() => handleDelete(project.id)}
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


  )
}

export default ProjectList
