import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';


function EditDepartment() {
  const [isOpen, setIsOpen] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const location = useLocation();
  const { departmentId, departmentName: initialDepartmentName } = location.state;
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the update logic using the updated departmentName
    // ...

    toast.success('Department updated successfully');
  };








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
        Add Department
      </button>

      {isOpen && (
        /* Main modal */
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 inset-0 bg-gray-500 opacity-95 flex items-center justify-center shadow-white h-full"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold">Add Department</h1>
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
            <div className="modal-body bg-white">
              <form >
                <div className="mb-4">
                  <label
                    htmlFor="departmentName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department Name
                  </label>
                  <input
                    type="text"
                    name="departmentName"
                    id="departmentName"
                    value={initialDepartmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter the department name"
                  />
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

export default EditDepartment;
