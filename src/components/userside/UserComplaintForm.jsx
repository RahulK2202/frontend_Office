import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from '../../API/Api'
import  AuthContext  from '../Contexts/AuthContext'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserComplaintForm({refresh, setRefresh}) {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    employee: user?.user_id || "",
    username: user?.username || "",
    email: user?.email || "",
    description: ""
  });

console.log(user,"im hereeeee");

  useEffect(() => {
   
    setFormData({
      employee: user?.user_id || "",
      username: user?.username || "",
      email: user?.email || "",
      description: ""
    });
  }, [user]);



  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const dataToSend = {
        employee: formData.employee,
        description: formData.description,
        is_present: true
      };
      console.log(dataToSend, "form contains data");
      const response = await axios.post(`${BACKEND_BASE_URL}/complaint/complaints/`, dataToSend);
      console.log(response.data);
      toast.success("Complaint submitted successfully");
      setFormData({
        ...formData,
        description: ""
      });
      
      setRefresh(!refresh)
    } catch (error) {
      toast.error("Failed to submit complaint");
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  return (
    
    <div>
      <ToastContainer />
       <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
          Add Complaints
        </div>
        <div className="p-3">
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="flex -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="restaurant_name"
                >
                  Employee id
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker"
                  id="employee"
                  type="text"
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="executive_name"
                >
                 Employee Username
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex  -mx-3 mb-6">
             

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="email_address"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

          

            <div className="flex  -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="description"
                >
                 Complaint
                </label>
                <textarea
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
          

            </div>

         


            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Complaints
            </button>
            
          </form>
        </div>
      </div>
    </div>

      
    </div>
  )
}

export default UserComplaintForm
