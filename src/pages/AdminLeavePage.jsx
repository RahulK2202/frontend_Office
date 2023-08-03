import React from 'react'
import AdminSidebar from '../components/adminside/AdminSidebar'
import AdminNavbar from '../components/adminside/AdminNavbar'
import Announcements from '../components/adminside/Announcements'
import AnnoucementTable from '../components/adminside/AnnoucementTable'
import AdminLeaveTable from '../components/adminside/AdminLeaveTable'



function AdminLeavePage() {
  return (
    <div>
      


      <AdminNavbar/> 
               
               <div>
              
                 <div className='flex'>
                     <AdminSidebar/> 
                    
                   
                     <div className='w-full'>
                     
                     <AdminLeaveTable/>
                     </div>
                   </div>
           
</div>

    </div>
  )
}

export default AdminLeavePage
