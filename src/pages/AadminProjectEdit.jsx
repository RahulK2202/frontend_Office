import React from 'react'
import AdminSidebar from '../components/adminside/AdminSidebar'
import AdminNavbar from '../components/adminside/AdminNavbar'
import Announcements from '../components/adminside/Announcements'
import AnnoucementTable from '../components/adminside/AnnoucementTable'
import ProjectEdit from '../components/adminside/ProjectEdit'



function AadminProjectEdit() {
  return (
    <div>
      


      <AdminNavbar/> 
               
               <div>
              
                 <div className='flex'>
                     <AdminSidebar/> 
                    
                   
                     <div className='w-full'>
                     
                     <ProjectEdit/>
                     </div>
                   </div>
           
</div>

    </div>
  )
}

export default AadminProjectEdit
