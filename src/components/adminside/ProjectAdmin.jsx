import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../API/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProjectAdmin({ onChange }) {
  const [showModal, setShowModal] = useState(false);
  const[refresh,setRefresh]=useState(false)
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    // state: 'NEW',
    assignedTo: '',
    description: '',
    start_date: '',
    end_date: '',
    project: '',
  });

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/user/employelist/`) 
      .then((response) => {
     
        setEmployees(response.data);
      })
      .catch((error) => {
      
      });
      axios
      .get(`${BACKEND_BASE_URL}/project/projects/`)
      .then((response) => {
      
       
        setProjects(response.data);
      })
      .catch((error) => {
       
        console.error('Error fetching projects:', error);
      });
  }, []);


  const handleChange = (e) => {


    
 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };










  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    axios.post(`${BACKEND_BASE_URL}/project/tasks/`, formData)
      .then((response) => {
        onChange();
        toast.success('Task added successfully!');
      
        closeModal();
      })
      .catch((error) => {
        toast.error('Failed to add Task. ');
        console.error(error);
      });
  };


  return (
    <div>
       <ToastContainer />
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Tasks
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 w-1/3 mx-auto rounded shadow-lg z-50">
            <div className="flex justify-end mb-4">
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub-Task name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData. name}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  className="form-input w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Project
                </label>
                <select
                  name="project"
                  type="number"
                  value={formData.project}
                  onChange={handleChange}
                  className="form-select w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a project</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
               
                <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Assigned To
                </label>
                <select
                  name="assignedTo"
                  type="number"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className="form-select w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a employee</option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.email}
                    </option>
                  ))}
                </select>
              </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col space-y-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      style={{ height: "300px" }}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="form-textarea w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Enter project description"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col space-y-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleChange}
                      className="form-input w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Select start date"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="end_date"
                      value={formData.end_date}
                      onChange={handleChange}
                      className="form-input w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Select End date"
                    />
                  </div>
                </div>
              </div>
            





              <div className="form-group">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
                >
                  Create Sub Task
                </button>
              </div>






            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectAdmin;
