import React, { useEffect, useState } from 'react';
import { fetchVisitors,deleteVisitor } from '../../data/visitorApi';
import { Link } from 'react-router-dom';

function AdminVisit() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitorData();
  }, []);

  const fetchVisitorData = async () => {
    try {
      const data = await fetchVisitors();
    
      setVisitors(data);
    
    } catch (error) {
      console.error('Error fetching visitor data:', error.message);
    }
  };



  const handleDelete = async (visitorId) => {
    const confirmed = window.confirm('Are you sure you want to delete this visitor?');
    if (!confirmed) {
      return;
    }
  
    try {
      await deleteVisitor(visitorId);
      console.log('Visitor deleted successfully');
     
      setVisitors((prevVisitors) =>
        prevVisitors.filter((visitor) => visitor.id !== visitorId)
      );
    } catch (error) {
      console.error('Error deleting visitor:', error);
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


          {/* <button
                className="bg-teal-300 cursor-pointer rounded p-1 mt-4 text-white"
                onClick={handleAddVisitor}
              >
                Add Visitor
              </button> */}




          <div className="p-3">
            <table className="table-responsive w-full rounded">
              <thead>
                <tr>
                  <th className="border w-1/4 px-4 py-2">Id</th>
                  <th className="border w-1/4 px-4 py-2">Visitor Name</th>
               
                  <th className="border w-1/6 px-4 py-2"> email</th>

                  <th className="border w-1/6 px-4 py-2">Actions</th>
            
             


                </tr>

              
              </thead>

              
               <tbody>
               {visitors.map((visitor) => (
                    <tr key={visitor.id}>
                    <td className="border px-4 py-2">{visitor.id} </td>

                    <td className="border px-4 py-2">{visitor.name}</td>
                    <td className="border px-4 py-2">{visitor.email}</td>
                    
                    <td className="border px-4 py-2 flex">
                    

{/* <Link
  to={`/employeedit/${visitor.id}`}
  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white"
>
  <i className="fas fa-edit"></i>
</Link> */}


<button
  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500"
  onClick={() => handleDelete(visitor.id)}
>
  <i className="fas fa-trash"></i>
</button>


                    


                    </td>
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

export default AdminVisit
