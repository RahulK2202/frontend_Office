import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import AnnouncementTable from '../components/adminside/AnnoucementTable'
import Complaints from '../components/adminside/Complaints'

function AdminComplaints() {
  return (
    <div>
      


    <AdminNavbar/> 
             
             <div>
            
               <div className='flex'>
                   <AdminSidebar/> 
                  
                 
                   <div className='w-full'>
                   < Complaints/> 
                 
                   </div>
                 </div>
         
</div>

  </div>
  )
}

export default AdminComplaints
