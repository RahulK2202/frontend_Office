import React from 'react'
import AdminSidebar from '../components/adminside/AdminSidebar'
import AdminNavbar from '../components/adminside/AdminNavbar'
import Announcements from '../components/adminside/Announcements'
import AnnoucementTable from '../components/adminside/AnnoucementTable'



function AdminAnnoucement() {
  return (
    <div>
      


      <AdminNavbar/> 
               
               <div>
              
                 <div className='flex'>
                     <AdminSidebar/> 
                    
                   
                     <div className='w-full'>
                     
                     <AnnoucementTable/>
                     </div>
                   </div>
           
</div>

    </div>
  )
}

export default AdminAnnoucement
