import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import Department from '../components/adminside/Department'


function AdminDepartment() {
  return (
    <div>
      

      <AdminNavbar/> 
                 
                    <div>
                   
                      <div className='flex'>
                          <AdminSidebar/> 
                         
                        
                          <div className='w-full'>
                            <Department/> 
                          </div>
                        </div>
                
</div>
    </div>
  )
}

export default AdminDepartment
