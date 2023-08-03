import React, { useEffect, useState } from 'react';
import { fetchVisitors } from '../../data/visitorApi';
import { Link } from 'react-router-dom';

function VisitorTable(refresh) {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitorData();
  },[refresh]);

  const fetchVisitorData = async () => {
    try {
      const data = await fetchVisitors();
    console.log(data,"visitor data");
      setVisitors(data);
    
    } catch (error) {
      console.error('Error fetching visitor data:', error.message);
    }
  };



  return (



    <div>
       <div>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
            Visitor List
          </div>
          <div className="p-3">
            <table className="table-responsive w-full rounded">
              <thead>
                <tr>
                  <th className="border w-1/4 px-4 py-2">Id</th>
                  <th className="border w-1/4 px-4 py-2">Visitor Name</th>
               
                  <th className="border w-1/6 px-4 py-2"> Email</th>
                  <th className="border w-1/6 px-4 py-2"> Date</th>
                  <th className="border w-1/6 px-4 py-2"> Start_date</th>
                  <th className="border w-1/6 px-4 py-2"> End_date</th>


                  {/* <th className="border w-1/6 px-4 py-2">Actions</th> */}
            
                  {/* <th className="border w-1/5 px-4 py-2">Actions</th> */}
                </tr>

              
              </thead>

              
               <tbody>
               {visitors.map((visitor) => (
                    <tr key={visitor.id}>
                    <td className="border px-4 py-2">{visitor.id} </td>

                    <td className="border px-4 py-2">{visitor.name}</td>
                    <td className="border px-4 py-2">{visitor.email}</td>
                    <td className="border px-4 py-2">{visitor.date}</td>
                    <td className="border px-4 py-2">{visitor.start_time}</td>
                    <td className="border px-4 py-2">{visitor.end_time}</td>

                    {/* <td className="border px-4 py-2">{employee.phone}</td>
                    <td className="border px-4 py-2">{employee.email}</td>
                    <td className="border px-4 py-2">{employee.designation} </td> */}
                    {/* <td className="border px-4 py-2 flex">
                      <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                        <i className="fas fa-eye"></i>
                      </a>

<Link
  to={`/employeedit/${visitor.id}`}
  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white"
>
  <i className="fas fa-edit"></i>
</Link>
                      <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                        <i className="fas fa-trash"></i>
                      </a>
                      <BlockModal employeeId={employee.id} isBlocked={employee.is_blocked}  /> 
                    </td> */}
                  </tr>
                ))}
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>




  )
}

export default VisitorTable
