import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../Contexts/AuthContext';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LoadingSpinner from '../Utils/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { BACKEND_BASE_URL } from '../../API/Api';
import { Triangle } from 'react-loader-spinner';


function VisitorsForm({refresh,setRefresh}) {
  const { user } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [showSpinner, setShowSpinner] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    reason: '',
    date: '',
    startTime: '',
    endTime: '',
    organizer: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        organizer: user.username,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const value = e.target.name === 'organizer' ? user.username : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    const updatedFormData = {
      ...formData,
      organizerId: user.user_id,
    };

    setShowSpinner(true)

    axios
      .post(`${BACKEND_BASE_URL}/visitor/`, updatedFormData)
      .then((response) => {
        console.log(response.data);
        toast.success(response.data.message);
        // localStorage.removeItem('loading')
        
        setFormData({
          name: '',
          reason: '',
          email: '',
          date: '',
          startTime: '',
          endTime: '',
          organizer: user.username,
        });
        setRefresh(!refresh)
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          toast.error(error.response.data);
        } else {
          toast.error('An error occurred');
        }
      })
      .finally(() => {
        setShowSpinner(false);
      });
  };

 
  return (

    <div>
    {( showSpinner  &&

      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-opacity-70 bg-white">
        <Triangle
            height="80"
            width="80"
            color="#4fa94d"
           ariaLabel="triangle-loading"
                  />
              </div>
                  )}
    <div className="container icenter mx-auto px-4">
    <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Visitors Form</h1>
      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label>Reason For visit</label>

          <textarea
            name="reason"
            placeholder="Reason for Visit"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* <div className="mb-4">
        <label>organizerId</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}

          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          required
          hidden
        />

      </div> */}

        <div className="mb-4">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label>Starting Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label>Ending Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* <div className="mb-4">
          <label>Organizer</label>
          <input
            type="text"
            name="organizer"
            placeholder="Organizer"
            value={formData.organizer}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div> */}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Visitor
        </button>
      </form>
    </div>
    </div>
  );
}

export default VisitorsForm;
