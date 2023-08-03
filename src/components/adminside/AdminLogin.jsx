import React,{ useState,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import { BACKEND_BASE_URL } from '../../API/Api';
import AuthContext from '../Contexts/AuthContext'
import jwt_decode from 'jwt-decode';
import officeLogo from '../../images/office-Management-PNG-Background.png'
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AdminLogin=()=> {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { setUser } = useContext(AuthContext);
    
    const submit = async (e) => {
        e.preventDefault();
        const user = {
          email : email,
          password: password
        }

        try {
            
          const {data} = await axios.post(`${BACKEND_BASE_URL}/user/login/`, user)

          
          console.log(data,"hhhhhhh")
         
          localStorage.setItem('access_token',data.access_token)
          // Cookies.set('access_token', data.access_token);
        
        const tokenData = jwt_decode(data.access_token);
      
        const LoggedInUser = {
          name: tokenData.name,
          email: tokenData.email,
          is_active: tokenData.is_active,
       
          is_admin: tokenData.is_admin,
      
        };
        console.log(LoggedInUser,"loged userrrrr")
        setUser(LoggedInUser);

         

          const accessToken = localStorage.getItem('access_token');
         
          console.log('Access Token:', accessToken);
      
          navigate("/dashboard");
        }
        catch (error) {
          console.error("error in token fetch: ", error.message);
          console.log("error.response: ", error.response); 
          // Show the error message using toastify
          if (error.response && error.response.data && error.response.data.error) {
            // If the backend provides an error message, use it
            toast.error(error.response.data.error);
          }
           else {
            // If there's no specific error message, show a generic one
            toast.error("An error occurred. Please try again later.");
          }
        
        }
  
      }

       



  return (
  <div>
<ToastContainer />
    <div className="flex flex-row items-center justify-center min-h-screen bg-blue-300">
            <div className=" grid grid-cols-2 gap-4 py-4 px-6 ">
                <div className="w-full h-full  items-center justify-center">
                  <br/>
                  <br/>
                    <img src={officeLogo} alt="Logo" className="mx-auto ml-auto mb-8 items-center h-3/4 w-3/4" />
                </div>
                <div className="flex-col items-center justify-center">
                    <div className="items-center flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full w-full">
                      <br/>
                      

                        <form className="Auth-form" onSubmit={submit}>
                        <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
    </label>
    <input
        className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
    />
</div> 

                            <br/>
                            <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
    </label>
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
        required
        onChange={e => setPassword(e.target.value)}
    />
</div>


                            <br/>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
);
};

  


export default AdminLogin
