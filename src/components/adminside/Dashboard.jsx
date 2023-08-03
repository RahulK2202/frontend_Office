import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../API/Api'


const Dashboard = () => {

  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);






  const fetchDashboardData = async () => {
    try {
      const response = await axios.get( `${BACKEND_BASE_URL}/leave/dashboard_data/`);
      const data = response.data;
      setEmployeeCount(data.employeeCount);
      setDepartmentCount(data.departmentCount);
      setVisitorsCount(data.visitorsCount);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };


  return (
    <div>
    <main className="bg-white-300   flex-1 p-3 overflow-hidden">
      <div className="flex flex-col">
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
          <div className="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <a href="#" className="no-underline text-white text-2xl">
                {employeeCount}
              </a>
              <a href="#" className="no-underline text-white text-lg">
                Total Employees
              </a>
            </div>
          </div>

          <div className="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <a href="#" className="no-underline text-white text-2xl">
                {departmentCount}
              </a>
              <a href="#" className="no-underline text-white text-lg">
                Total Departments
              </a>
            </div>
          </div>

          <div className="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <a href="#" className="no-underline text-white text-2xl">
                {visitorsCount}
              </a>
              <a href="#" className="no-underline text-white text-lg">
                Daily Visitors
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
};

export default Dashboard;
