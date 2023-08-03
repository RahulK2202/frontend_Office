import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../components/Contexts/AuthContext';
import { BACKEND_BASE_URL } from '../API/Api';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Triangle } from 'react-loader-spinner';

const AddMeeting = ({refresh, setRefresher}) => {
  const { user } = useContext(AuthContext);
  const [showSpinner, setShowSpinner] = useState(false);
  console.log(user, "user there");

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        organizer: user.username,
      }));
      // fetchOrganizerName(user.user_id);
    }
  }, [user]);



  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    organizer: user ? user.username :null,
  });
  // const [organizerName, setOrganizerName] = useState('');

  





  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const organizerId = user.user_id;
      const updatedFormData = {
        ...formData,
        organizer: organizerId,
      };
  
      setShowSpinner(true);
  
      const response = await axios.post(`${BACKEND_BASE_URL}/meeting/meetings/`, updatedFormData);
      setFormData({
        title: '',
        description: '',
        date: '',
        start_time: '',
        end_time: '',
        organizer: '',
      });
      toast.success('Meeting added successfully');
      setRefresher(!refresh);
    } catch (error) {
      console.error(error);
      toast.error('Failed to add meeting. Please try again.');
    } finally {
      setShowSpinner(false);
    }
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
      <h1 className="text-3xl font-bold mb-4">Add Meeting</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label>Desciption</label>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

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
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="w-1/2 pl-2">
          <label>Ending Time</label>

            <input
              type="time"
              name="end_time"
              value={formData.end_time}
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
          Add Meeting
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddMeeting;
