import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logs from "../../images/logo.png";
import AuthContext from '../Contexts/AuthContext'
import { useContext } from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';



function UserNavbar() {
        const navigate = useNavigate();
        const [isNavOpen, setIsNavOpen] = useState(false);
        const {setUser} = useContext(AuthContext)
        const {user} = useContext(AuthContext)
        const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
        };


console.log(user,"data");

        const handleLogout = () => {
            console.log("ttttttttttttttttttttttttt")
            localStorage.removeItem("access_token");
            
            setUser(null)
            
            navigate("/user")
        
        };


    return (
        <header class=" w-full ">
            <nav id="header" className="fixed bg-blue-500 w-full z-30 py-2.5 top-0 text-white">
                <div className="  w-full container  flex flex-wrap items-center justify-between mt-0 py-2 max-w-screen-xl px-4 mx-auto">
                    {/* <div className="pl-4 flex items-center"> */}
                        <a href="#" className="flex items-center">
                    <img src={logs} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OfficeXpert</span>
                </a>
                    {/* </div> */}
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-blue-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={toggleNav}>
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${isNavOpen ? 'block' : 'hidden'}`} id="nav-content">
                        <ul className="list-reset lg:flex justify-center flex-1 items-center">
                            <li className="mr-3">
                                
                            <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>

                        </ul>


                        {user? (
  <>
 
    <Link to="/profileuser" className="text-white">View Profile</Link>
  </>
) : null}


                        <button
                            // id="navAction"
                            onClick={handleLogout}
                            className="mx-auto lg:mx-0 hover:underline  text-gray-800 font-bold mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Logout</a>

                        </button>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </header>
        )}
export default UserNavbar