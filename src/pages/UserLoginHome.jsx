import React, { useEffect, useState } from 'react';
import { EmployeeLoginSchema } from '../validations/FormValidation';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import officeLogo from '../images/office-Management-PNG-Background.png';
import banner from '../images/banner.png';
import LoadingSpinner from '../components/Utils/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import AuthContext from '../components/Contexts/AuthContext';
import { useContext } from "react";
import jwt_decode from 'jwt-decode';
import { BACKEND_BASE_URL } from '../API/Api';



function UserLoginHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['jwt_token']);
  const [loading, setLoading] = useState(true);
  const [verificationError, setVerificationError] = useState(false);
  const { setUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  


  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    const userId = new URLSearchParams(location.search).get('user_id');
    

    if (token && userId) {
      verifyToken(token, userId);
    } else {
      setLoading(false);
    }


    
  }, []);



  const verifyToken = (emailToken, userId) => {
    axios
      .post(
        `${BACKEND_BASE_URL}/user/verify-token/`, { token: emailToken, user_id: userId })
      .then((response) => {

        console.log(response.data)
        if (response.data.valid) {
          setLoading(false);
          // setCookie('jwt_token', emailToken, { secure: true, sameSite: 'strict' });
          navigate('/user');
        } else {
          setVerificationError(true);
          setLoading(false);
        }
      })
      .catch((error) => {
        setVerificationError(true);
        setLoading(false);
      });
  };


  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: EmployeeLoginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    // setLoading(true);
    var email = values['email'];
    var password = values['password'];
    axios
      .post(
        `${BACKEND_BASE_URL}/user/userlogin/`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response,"ffffffffffff");
        if (response.data.is_blocked) {
          console.log(response.data.is_blocked,"bbbbbbbbbbbbbbbb")
          // User is blocked, show toast notification
          toast.error('Your account is blocked. Please contact the administrator.');

          // setLoading(false);
        }else if (response.data.error) {
          // Email or password is incorrect, show toast notification
          toast.error('Incorrect email or password. Please try again.');
          // setLoading(false);

        }



        else{
        console.log(response.data,"this is the data we need ")
        // const accessToken = response.data.access_token;
       
        // Cookies.set("access_token", response.data.access_token);
        localStorage.setItem('access_token',response.data.access_token)


        const tokenData = jwt_decode(response.data.access_token);
  
        console.log( tokenData,"hhhhhhhhh")
        const LoggedInUser = {
          name: tokenData.name,
          email: tokenData.email,
          is_active: tokenData.is_active,
          department:tokenData.department,
          is_admin: tokenData.is_admin,
          user_id: tokenData.user_id,
          
        };
  
        console.log(LoggedInUser,"loged userrrrr")
        setUser(LoggedInUser);

        const access_token = localStorage.getItem('access_token');
         
        console.log('Access Token:', access_token);
       
        // setCookie('jwt_token', accessToken, { secure: true, sameSite: 'strict' });
        // Cookies.set("access_token", accessToken);
       
        navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('----------error');
        toast.error('Invalid Password or username')
      })
      .finally(() => {
        setLoading(false);
        console.log('--------final');
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  if (verificationError) {
    return <div>Error: Invalid token.</div>;
  }

  return (
    <div>
      

      <div>
      <ToastContainer />
      <div className="flex flex-row items-center justify-center min-h-screen bg-blue-300">
     
        <div className="grid grid-cols-2 gap-4 py-4 px-6">
          <div className="w-full h-full items-center justify-center">
            <br />
            <br />
            <img src={banner} alt="Logo" className="mx-auto ml-auto mb-8 items-center h-3/4 w-3/4" />
         
          </div>
          <div className="flex-col items-center justify-center">
          
            <div className="items-center flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full w-full">
              <br />
<form className="Auth-form" onSubmit={formik.handleSubmit}><div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={
                      formik.errors.email && formik.touched.email
                        ? 'form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                        : 'form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    }
                    id="email"
                    type="text"
                    placeholder="email"
                  name="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                  )}
                </div>
                <br />
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className={
                      formik.errors.password && formik.touched.password
                        ? 'form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                        : 'form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    }
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                  )}
                </div>

                <br />
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




    </div>
  );
}

export default UserLoginHome;
