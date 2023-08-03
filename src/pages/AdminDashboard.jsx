import React from "react";
import AdminSidebar from "../components/adminside/AdminSidebar";
import AdminNavbar from "../components/adminside/AdminNavbar";
import Dashboard from "../components/adminside/Dashboard";
import EmployeeDepartmentChart from "../components/Charts/EmployeeDepartmentChart";

function AdminDashboard() {
  return (
    <div>
      <div>
        <div>
          <AdminNavbar />
        </div>

        <div className="flex col-2">
          <AdminSidebar />
          <Dashboard />
          {/* <EmployeeDepartmentChart/> */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
