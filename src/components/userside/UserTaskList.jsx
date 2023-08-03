import React, { useState, useEffect, useContext } from 'react';
import { BACKEND_BASE_URL } from '../../API/Api';
import axios from 'axios';
import AuthContext from '../Contexts/AuthContext';

function UserTaskList() {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    // Fetch the list of tasks for the user
    

    fetchUserTasks();
  }, [user]);

  const fetchUserTasks = async () => {
    try {
      const userId = user.user_id;
      
      const response = await axios.get(`${BACKEND_BASE_URL}/project/individualtasks/${userId}/`);
      const data = response.data;
      console.log(data, "user tasks");
      setTasks(data);
    } catch (error) {
      console.error('Error fetching user tasks:', error);
    }
  };
  
  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      console.log(taskId, newStatus, "GGGGGGG");
  
   
      const response = await axios.patch(`${BACKEND_BASE_URL}/project/usertasks/${taskId}/`, {
        status: newStatus,
      });
  

      console.log('Response:', response.data);
  
      fetchUserTasks()


      setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );


      
      
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };
  








  const getStatusColor = (state) => {
    switch (state) {
      case "NEW":
        return "bg-yellow-500 text-white";
      case "PENDING":
        return "bg-blue-500 text-white";
      case "IN PROGRESS":
          return "bg-blue-500 text-white";

      case "COMPLETED":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }


  }



  return (
    <div>
      <div>
       
        <div className="p-3">
          <table className="table-responsive w-full rounded">
            <thead>
              <tr>
                <th className="border w-1/4 px-4 py-2">Id</th>
                <th className="border w-1/4 px-4 py-2">Project Name</th>
                <th className="border w-1/4 px-4 py-2">Task Name</th>
                <th className="border w-1/4 px-4 py-2">Description</th>
                <th className="border w-1/6 px-4 py-2">Assigned To</th>
                <th className="border w-1/6 px-4 py-2">Start_date</th>
                <th className="border w-1/6 px-4 py-2">End_date</th>
                <th className="border w-1/6 px-4 py-2">status</th>
                {/* <th className="border w-1/5 px-4 py-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="border px-4 py-2">{task.id}</td>
                  <td className="border px-4 py-2">{task.project.name}</td>
                  <td className="border px-4 py-2">{task.name}</td>
                  <td className="border px-4 py-2">{task.description}</td>
                  <td className="border px-4 py-2">{task.assignedTo[0].email}</td>
                  <td className="border px-4 py-2">{task.start_date}</td>
                  <td className="border px-4 py-2">{task.end_date}</td>
                  {/* <td className="border px-4 py-2">{task.state}</td> */}
                  <td className="border px-4 py-2">
                    {task.state === 'COMPLETED' ? (
                      <span className={`state-resolved ${getStatusColor(task.state)}`}>
                        COMPLETED
                      </span>
                    ) : (
                      <select
                        value={task.state}
                        onChange={(event) => updateTaskStatus(task.id, event.target.value)}
                        className={`state-select ${getStatusColor(task.state)}`}
                      >
                      <option value="NEW">NEW</option>
                      <option value="PENDING">PENDING</option>
                      <option value="IN PROGRESS">IN PROGRESS</option>
                      <option value="COMPLETED">COMPLETED</option>
                      </select>
                    )}
                  </td>








                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserTaskList;
