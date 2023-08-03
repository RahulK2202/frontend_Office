import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import LoginUserModal from '../components/userside/LoginUserModal'
import AdminSidebar from '../components/adminside/AdminSidebar'
import UserList from '../components/adminside/UserList'

function AdminUserList() {


  return (


 


 <div>
      

    <AdminNavbar/> 
               
                  <div>
                 
                    <div className='flex'>
                        <AdminSidebar/> 
                       
                      
                        <div className='w-full'>
                         
                        <UserList/> 
                         
                          


                        </div>
                      </div>
              
</div>
  </div>



    
  )
}

export default AdminUserList
