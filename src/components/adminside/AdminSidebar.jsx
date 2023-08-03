import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './dist/style.css';
import './dist/all.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext'





const AdminSidebar = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);


  const handleLogout = () => {
    console.log("ttttttttttttttttttttttttt")
    // Cookies.remove("access_token")
    localStorage.removeItem("access_token");
    setUser(null)
    
    navigate("/admin")

};



  return (
<aside className="bg-gradient-to-b h-screen from-blue-900 to-blue-700 text-white w-1/2 md:w-1/6 lg:w-1/6 border-r border-blue-900 hidden md:block lg:block">
      <div className="flex items-center justify-center h-16 mb-4">
        <i className="fas fa-user-circle text-3xl"></i>
      </div>
      <ul className="list-reset flex flex-col">
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/dashboard" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-tachometer-alt mr-2"></i>
            Dashboard
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/userlist" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fab fa-wpforms mr-2"></i>
            Employees
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/depart" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fab fa-uikit mr-2"></i>
            Departments
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/meeting" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-grip-horizontal mr-2"></i>
            Meetings
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/adminleave" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-calendar mr-2"></i>
            Leaves
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/addproject" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-clipboard-list mr-2"></i>
            Live Projects
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/adminproject" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-project-diagram mr-2"></i>
            Project Tasks
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/adminvisitor" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-table mr-2"></i>
            Visitors
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/complaints" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-headset mr-2"></i>
            Complaints
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
          <Link to="/announcement" className="font-sans font-semibold text-sm text-blue-200 hover:text-white">
            <i className="fas fa-bell mr-2"></i>
            Announcements
          </Link>
        </li>
        <li className="w-full h-full py-3 px-4 border-b border-blue-800">
        <button
      onClick={handleLogout}
      className="bg-blue-800 mt-5 hover:bg-blue-700 active:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300 shadow-lg"
      type="submit"
    >
      Sign Out
    </button>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;


















