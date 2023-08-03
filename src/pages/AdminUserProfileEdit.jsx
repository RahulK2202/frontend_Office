import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import EditEmployee from '../components/adminside/EditEmployee'


function AdminUserProfileEdit() {
  return (
    <div>
       <AdminNavbar/> 
                     <div className='absolute right-0'>
                    
                     </div>
                     <div className="flex col-2">  
                          <AdminSidebar/> 
                          
                          <EditEmployee/> 
                          </div>
                






    </div>
  )
}

export default AdminUserProfileEdit
