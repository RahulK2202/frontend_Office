import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import Department from '../components/adminside/Department'
import ProjectAdmin from '../components/adminside/ProjectAdmin'
import AdminTaskList from '../components/adminside/AdminTaskList'


function AdminProjectPages() {
  return (
    <div>
      

      <AdminNavbar/> 
                 
                    <div>
                   
                      <div className='flex'>
                          <AdminSidebar/> 
                         
                        
                          <div className='w-full'>
                            
                            < AdminTaskList/> 
                           
                          </div>
                        </div>
                
</div>
    </div>
  )
}

export default AdminProjectPages
