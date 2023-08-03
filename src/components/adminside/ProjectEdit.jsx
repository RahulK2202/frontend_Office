import React, { useEffect, useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import { BACKEND_BASE_URL } from './../../API/Api'
import axios from 'axios';


function ProjectEdit() {

    const { id } = useParams();
    const Navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        start_date: '',
        end_date: '',
    });



    useEffect(() => {
        const fetchProjectData = async () => {
          try {
            const response = await axios.get(`${BACKEND_BASE_URL}/project/projects/${id}`);
            setProject(response.data);
            console.log("project data:", response.data);
            // Set the form data with the fetched meeting data
            setFormData({
                name: response.data.name,
              description: response.data.description,
              
              start_time: response.data.start_time,
              end_time: response.data.end_time,
           
            });
          } catch (error) {
            console.error('Error fetching meeting data:', error);
          }
        };
    
        fetchProjectData();
      }, [id]);

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };



      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Send a PUT request to update the meeting data
          await axios.put(`${BACKEND_BASE_URL}/project/projects/${id}/`, formData);
          console.log('Project updated successfully');
          // Optionally, you can navigate to a different page after successful update
          // history.push('/meetings');
          Navigate("/addproject")
        } catch (error) {
          console.error('Error updating project:', error);
        }
      };
    
      if (!project) {
        return <div>Loading...</div>;
      }
    










  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
          
          <div className="bg-white p-4 w-1/3 mx-auto rounded shadow-lg z-50">
           
            <form onSubmit={handleSubmit} >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                 Project Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={project.name}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  className="form-input w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
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
                      defaultValue={project.description}
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
                      defaultValue={project.start_date}
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
                      defaultValue={project.end_date}
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
             Edit Project
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ProjectEdit
