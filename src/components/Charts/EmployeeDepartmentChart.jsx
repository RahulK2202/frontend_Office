// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import axios from 'axios';
// import { BACKEND_BASE_URL } from '../../API/Api';

// function EmployeeDepartmentChart() {
//   const [departmentData, setDepartmentData] = useState([]);

//   useEffect(() => {
//     fetchDepartmentData();
//   }, []);

//   const fetchDepartmentData = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_BASE_URL}/user/departments/`);
//       console.log(response.data, "cominggg");
//       setDepartmentData(response.data);
//     } catch (error) {
//       console.error('Error fetching department data:', error);
//     }
//   };

 
//   const departmentNames = departmentData.map((department) => department.name);

//   const chartData = {
//     labels: departmentNames,
//     datasets: [
//       {
//         label: 'Number of Employees',
//         data: departmentNames.map(() => 1), 
//         backgroundColor: 'rgba(54, 162, 235, 0.8)', 
//       },
//     ],
//   };

 
//   const chartOptions = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: false, 
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, 
//       },
//     },
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Departments</h2>
//       <div className="bg-white p-4 rounded-md shadow-md">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// }

// export default EmployeeDepartmentChart;
import React from 'react'

function EmployeeDepartmentChart() {
  return (
    <div>
      
    </div>
  )
}

export default EmployeeDepartmentChart

