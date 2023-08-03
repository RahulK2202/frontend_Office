import React from 'react'
import { Link } from 'react-router-dom';

function UserDashboardSidebar() {




  
  return (
   
    

<aside className="sidebar h-screen py-40 w-full md:w-full lg:w-full bg-gradient-to-b from-blue-900 to-blue-700 text-white px-4 ">
      <div className="flex items-center justify-center mb-8">
        <i className="fas fa-user-circle text-4xl w-32"></i>
      </div>
      <ul className="flex flex-col space-y-4">
        <li>
          <Link
            to="/profileuser"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-user mr-2"></i>
            View Profile
          </Link>
        </li>
        <li>
          <Link
            to="/profileuseredit"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-user-edit mr-2"></i>
            Edit Profile
          </Link>
        </li>
        <li>
          <Link
            to="/changepass"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-lock mr-2"></i>
            Change Password
          </Link>
        </li>
        <li>
          <Link
            to="/userleave"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            My Leaves
          </Link>

          </li>
          <li>
          <Link
            to="/userapplied"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-clock mr-2"></i>
           Applied leaves
          </Link>
          
         
          
        </li>
        <li>
          <Link
            to="/usertask"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            <i className="fas fa-tasks mr-2"></i>
            Tasks
          </Link>


          
        </li>



        {/* Add more links here as needed */}
      </ul>
    </aside>
   
  )
}

export default UserDashboardSidebar
