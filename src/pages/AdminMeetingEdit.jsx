import React from 'react'
import AdminNavbar from '../components/adminside/AdminNavbar'
import AdminSidebar from '../components/adminside/AdminSidebar'
import EditEmployee from '../components/adminside/EditEmployee'
import EditMeeting from '../components/adminside/EditMeeting'


function AdminMeetingEdit() {
  return (
    <div>
       <AdminNavbar/> 
                     <div className='absolute right-0'>
                    
                     </div>
                     <div className="flex col-2 gap-20">  
                          <AdminSidebar/> 
                          
                          <EditMeeting/> 
                          </div>
                






    </div>
  )
}

export default AdminMeetingEdit
