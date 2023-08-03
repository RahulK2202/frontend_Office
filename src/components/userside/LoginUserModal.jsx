import React, { useState,useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {EmployeeValidationSchema} from  '../../validations/FormValidation'
import {toast,Toaster} from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_BASE_URL } from '../../API/Api';


function LoginUserModal() {

  
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };






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






  const handleSubmit = (values) => {
    const generatedTemporaryPassword = Math.random().toString(36).slice(-8);

    const employeeData = {
      department: values.department,
      username: values.username,
      email: values.email,
     
      temporaryPassword: generatedTemporaryPassword,
    };
   
    
    registerEmployee(employeeData);
    closeModal();
  };

 
  

  const registerEmployee = (employeeData) => {


    console.log("employeee",employeeData)
    
    axios
      .post(`${BACKEND_BASE_URL}/user/registration/`, employeeData)
      .then((response) => {
        if (response.status === 200) {
          
          
         
          
         const tokens = response.data.tokens;
         console.log('Tokens:', tokens);
         toast.success('Employee added successfully');
         setTimeout(() => {
          // Code to execute after the timeout
          closeModal();
        }, 1000);
        } else {
          console.log('Failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };








  const formik = useFormik({
    initialValues: {
      department: '',
      username: '',
      email: '',
    },
    

    validationSchema: EmployeeValidationSchema,
    onSubmit: handleSubmit,
  });

  
  return (
    <div>
      {/* Modal toggle */}
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
        onClick={toggleModal}
      >
        Add Employee
      </button>

      {isOpen && (
        /* Main modal */
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50  inset-0 bg-gray-500 opacity-95 flex items-center justify-center shadow-white  h-full"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
          
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold">Add Employee</h1>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                data-modal-hide="authentication-modal"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body bg-white ">
              <form onSubmit={formik.handleSubmit}>


                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className={`bg-white border ${
                      formik.errors.username && formik.touched.username
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    placeholder="Enter your username"
                    {...formik.getFieldProps('username')}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <p className="text-red-500 text-sm">{formik.errors.username}</p>
                  )}
                </div>


                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-white border ${
                      formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    placeholder="Enter your email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                  )}
                </div>



                {/* <div className="mb-4">
                  <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Department
                  </label>
                  <select
                    name="department"
                    id="department"
                    className={`bg-gray-50 border ${
                      formik.errors.department && formik.touched.department ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    {...formik.getFieldProps('department')}
                  >
                    <option value="">Select department</option>
                    <option value="python django">Python Django</option>
                    <option value="ui ux">UI/UX</option>
                    <option value="api">API</option>
                    <option value="react">React</option>
                    <option value="support">Support</option>
                  </select>
                  {formik.errors.department && formik.touched.department && (
                    <p className="text-red-500 text-sm">{formik.errors.department}</p>
                  )}
                </div> */}


<div className="mb-4">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <select
                    name="department"
                    id="department"
                    className={`bg-white border ${
                      formik.errors.department && formik.touched.department ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    {...formik.getFieldProps('department')}
                  >
                    <option value="">Select department</option>
                    {departments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.department && formik.touched.department && (
                    <p className="text-red-500 text-sm">{formik.errors.department}</p>
                  )}
                </div>










                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Toaster />
        </div>
      )}
    </div>
  );
}

export default LoginUserModal;
