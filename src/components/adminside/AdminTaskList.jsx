import React, { useState, useEffect } from 'react';
import { BACKEND_BASE_URL } from '../../API/Api';
import axios from 'axios';
import ProjectAdmin from './ProjectAdmin';

function AdminTaskList() {
  // Step 1: Initialize state to store the list of tasks
const [tasks, setTasks] = useState([]);
const [refresh,setRefresh]=useState(false);
  // Step 2: Use useEffect to fetch the list of tasks when the component mounts
  useEffect(() => {


    // Define a function to fetch the tasks
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BACKEND_BASE_URL}/project/tasks/`);
        const data = response.data;
        console.log(data, "yesss");
        setTasks(data); // Update the state with the fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [refresh]);

  const handleProjectAdminChange = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  
  return (
    <div>
        <ProjectAdmin onChange={handleProjectAdminChange}/> 
      <div className="p-3">
        <table className="table-responsive w-full rounded">
          <thead>
            <tr>
              <th className="border w-1/4 px-4 py-2">Id</th>
              <th className="border w-1/4 px-4 py-2">Project Name</th>
              <th className="border w-1/4 px-4 py-2">Description</th>
              <th className="border w-1/6 px-4 py-2">Assigned To</th>
              {/* <th className="border w-1/6 px-4 py-2">Contact Number</th> */}
              <th className="border w-1/6 px-4 py-2">Start_date</th>
              <th className="border w-1/6 px-4 py-2">End_date</th>
              <th className="border w-1/6 px-4 py-2">status</th>
              {/* <th className="border w-1/5 px-4 py-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* Step 4: Render the fetched task details in the table */}
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border px-4 py-2">{task.id}</td>
                <td className="border px-4 py-2">{task.project.name}</td>
                <td className="border px-4 py-2">{task.description}</td>
                <td className="border px-4 py-2">{task.assignedTo[0].email
}</td>
                <td className="border px-4 py-2">{task.start_date}</td>
                <td className="border px-4 py-2">{task.end_date}</td>
                <td className="border px-4 py-2">{task.state}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTaskList;
