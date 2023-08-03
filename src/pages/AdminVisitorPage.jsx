import React from 'react'



import VisitorTable from '../components/userside/VisitorTable'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import AdminVisit from '../components/adminside/AdminVisit'

function AdminVisitorPage() {
  return (

    <div>
      

    <AdminNavbar/> 
               
                  <div>
                 
                    <div className='flex'>
                        <AdminSidebar/> 
                       
                      
                        <div className='w-full'>
                         
                        <AdminVisit/> 
                         
                          


                        </div>
                      </div>
              
</div>
  </div>
  )
}

export default AdminVisitorPage
