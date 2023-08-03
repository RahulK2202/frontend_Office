import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import MeetingTable from './MeetingTable'

function AdminMeeting() {
  return (

    <div>
      

    <AdminNavbar/> 
               
                  <div>
                 
                    <div className='flex'>
                        <AdminSidebar/> 
                       
                      
                        <div className='w-full'>
                         <MeetingTable/>
                        </div>
                      </div>
              
</div>
  </div>
  )
}

export default AdminMeeting
