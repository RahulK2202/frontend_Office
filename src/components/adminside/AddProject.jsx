import React, { useState } from 'react';

import axios from 'axios';

import { BACKEND_BASE_URL } from '../../API/Api'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProject({onChange}) {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };





const handleSubmit = async (e) => {
  e.preventDefault();
  closeModal();
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/project/projects/`, formData);
    onChange();
    toast.success('Project added successfully!');
  } catch (error) {
    console.error('Error creating project:', error);

    if (error.response && error.response.data && error.response.data.detail) {
      // Display the backend error message in the toaster
      toast.error(error.response.data.detail);
    } else {
      toast.error('Failed to add project. Please try again later.');
    }
  }
};




  return (
    <div>
          <ToastContainer />
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Project
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
                 Project Name
                </label>
                <input
                  type="text"
                  name="name"
            value={formData.name}
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
               Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProject;
