import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import Department from '../components/adminside/Department'
import ProjectAdmin from '../components/adminside/ProjectAdmin'
import AddProject from '../components/adminside/AddProject'
import ProjectList from '../components/adminside/ProjectList'


function AdminListProject() {
  return (
    <div>
      

      <AdminNavbar/> 
                 
                    <div>
                   
                      <div className='flex'>
                          <AdminSidebar/> 
                         
                        
                          <div className='w-full'>
                           

                            < ProjectList/> 
                           
                          </div>
                        </div>
                
</div>
    </div>
  )
}

export default AdminListProject
