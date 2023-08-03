import React, { useState, useEffect } from "react";
 import axios from "axios";
 import { Link, useParams,useNavigate } from "react-router-dom";
 import { BACKEND_BASE_URL } from "../../API/Api";

const EditEmployee = ({ match }) => {
  const { id } = useParams();
  const Navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
 const [selectedDepartment, setSelectedDepartment] = useState('');
  const [formData, setFormData] = useState({
    employee_name: "",
    department_name: "",
    contact_number: "",
    email_address: "",
    designation: "",
    employee_id: "",
    employee_username: "",
    employee_first_name: "",
    employee_last_name: "",
    contact_number:""
  });


  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/user/departments/`);
      const data = response.data;
      setDepartments(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    fetchDepartments();
  }, []);





  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_BASE_URL}/user/details/${id}/`
        );
        const user = response.data;
        
        
        setFormData({
          employee_id: user.id,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,

          department_id: user.department_id,
          department_name: user.department_name,
          contact_number: user.phone,
          email_address: user.email,
          designation: user.designation,

        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [id]);



  const handleChange = (e) => {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,

      });
    console.log(formData)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      
      formDataToSend.append("department_id", formData.department_id);
      formDataToSend.append("phone", formData.contact_number);
      formDataToSend.append("email_address", formData.email_address);
      formDataToSend.append("designation", formData.designation);
      


      const response = await axios.put(
       `${BACKEND_BASE_URL}/user/edit/${id}/`,
        formDataToSend,
        {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
      );

      console.log(response.data);
      Navigate("/userlist");

    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  return (
    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
          Edit Employee Details
        </div>
        <div className="p-3">
          <form className="w-full" onSubmit={handleSubmit}>
             <div className="flex -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="employee_id"
                >
                  Employee ID
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker"
                  id="employee_id"
                  type="text"
                  name="employee_id"
                  value={formData.employee_id}
                  onChange={handleChange}
                  required readOnly
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="employee_username"
                >
                  Employee Username
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker"
                  id="employee_username"
                  type="text"
                  name="employee_username"
                  value={formData.username}
                  onChange={handleChange}
                  required readOnly
                />
              </div>
            </div>
            <div className="flex -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="employee_name"
                >
                  Employee First Name
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker"
                  id="first_name"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="last_name"
                >
                  Employee Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker"
                  id="last_name"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex  -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="contact_number"
                >
                  Contact Number
                </label>
                <input className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="contact_number"
                  type="text"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="email_address"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="email_address"
                  type="email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  required readOnly
                />
              </div>
            </div>
            <div className="flex  -mx-3 mb-6">

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="city"
                >
                  Designation
                </label>
                <input
                  className="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="designation"
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

<div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                  htmlFor="department"
                >
                  Department
                </label>

<select
  name="department_id"
  id="department"
  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

  onChange={handleChange}
>
  <option value="">Select department</option>
  {departments.map((department) => (
    <option
      key={department.name}
      value={department.id}
      selected={formData.department_id === department.id}
    >
      {department.name}
    </option>
  ))}
</select>



              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;