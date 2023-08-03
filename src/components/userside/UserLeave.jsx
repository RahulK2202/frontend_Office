import React, { useState ,useContext} from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../API/Api'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function UserLeave() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  console.log(user, "user hhhhe");
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    leave_type: 'Sick Leave', 
    reason: '',
    start_date: '',
    end_date: '',
  });

  const closeModalWithDelay = () => {
   
    setTimeout(() => {
      closeModal();
    }, 4000);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

console.log(user,"data gottt");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
 
    e.preventDefault();
    closeModal();
    const updatedFormData = {
        ...formData,
        employee: user.user_id,
      };
  

console.log(updatedFormData,"form contain");



      axios
      .post(`${BACKEND_BASE_URL}/leave/leaves/`, updatedFormData)
      .then((response) => {
        console.log(response.data);
        toast.success(response.data.message);
       
        closeModalWithDelay();
        setFormData({
            leave_type: 'Sick Leave', 
            reason: '',
            start_date: '',
            end_date: '',
        });

    })
    .catch((error) => {
      console.error('Error creating leave request:', error);
      const responseData = error.response.data; // Get the response data from the error object
      if (responseData.error === 'You cannot apply for leave in the past.') {
        toast.error('You cannot apply for leave in the past. Please select a valid start date.');
      } else if (responseData.error === 'You have already applied for leave during this period.') {
        toast.error('You have already applied for leave during this period.');
      } else {
        toast.error('Failed to create leave request. Please try again later.');
      }
    });


  };



  return (
    <div>
        <ToastContainer />
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Apply leave
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
          


              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  LEAVE TYPE
                  </label>
                  <select
                    name="leave_type"
                    value={formData.leave_type}
                    onChange={handleChange}
                    className="form-select w-full border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Vacation Leave">Vacation Leave</option>
                    <option value="Personal Leave">Personal Leave</option>
                  </select>
                </div>
               
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col space-y-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Reason for leave
                    </label>
                    <textarea
                      style={{ height: "300px" }}
                      name="reason"
                      value={formData.reason}
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
                 Apply leave
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserLeave;
