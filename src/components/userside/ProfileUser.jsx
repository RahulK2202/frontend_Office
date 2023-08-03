import React, { useContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../Contexts/AuthContext';
import { BACKEND_BASE_URL } from '../../API/Api';
import car from '../../images/anuru.jpg'

function ProfileUser() {
  const [userData, setUserData] = useState(null);
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const fileInputRef = useRef(null);
  const user_id = user && user.user_id;

  useEffect(() => {
    if (user_id) {
      fetchUserData(user_id);
    }
  }, [user_id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));


    
  };



  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('profile_pic', selectedFile);
  
    try {
      const response = await axios.put(`${BACKEND_BASE_URL}/user/upload-profile-picture/`, formData);
      // Handle the response if needed

      
      console.log(response.data);
    } catch (error) {
      // Handle errors if any
      console.error(error);
    }
  };










  const fetchUserData = async (user_id) => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/user/userdetails/${user_id}/`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


 console.log(userData,'---------user');


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">





      {userData ? (
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 flex justify-center items-center">
              <div className="relative">
                { userData.profile_pic ? (
                <img src={`${BACKEND_BASE_URL}${userData.profile_pic}`} alt="Preview" className="w-48 h-48 rounded-full shadow-2xl" />
                ) :    
                previewURL ? (
                  <img src={previewURL} alt="Preview" className="w-48 h-48 rounded-full shadow-2xl" />
                ) : (
                  <div className="w-48 h-48 bg-indigo-100 flex justify-center items-center rounded-full shadow-2xl">
                    <label htmlFor="upload" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <input id="upload" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    </label>
                  </div>
                )}
                
                <button
                  onClick={handleUpload}
                  className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-4xl font-bold text-gray-800">{userData.username}</h1>
              <p className="text-lg text-gray-600">{userData.email}</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 font-semibold">First Name:</p>
                  <p className="text-gray-800">{userData.first_name}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 font-semibold">Last Name:</p>
                  <p className="text-gray-800">{userData.last_name}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 font-semibold">Phone Number:</p>
                  <p className="text-gray-800">{userData.phone}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 font-semibold">Designation:</p>
                  <p className="text-gray-800">{userData.designation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-light lg:px-16">
              "Success is not final, failure is not fatal: It is the courage to continue that counts."
            </p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default ProfileUser
