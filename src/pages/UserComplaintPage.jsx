import React, { useState, useEffect ,useContext} from "react";
import UserNavbar from '../components/userside/UserNavbar'
import UserFooter from '../components/userside/UserFooter'
import UserComplaintForm from '../components/userside/UserComplaintForm'
import Usercomplaintlist from '../components/userside/Usercomplaintlist'

function UserComplaintPage() {

  const [refresh , setRefresh] = useState(false)


  return (



      

      <div>
    
    <header class=" w-full">
        <UserNavbar/>
    </header>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='flex gap-24' >
        <div className='w-1/2 px-10'>
        <UserComplaintForm  refresh={refresh} setRefresh={setRefresh}/>
    {/* <VisitorTable refresh={refresh} setRefresh={setRefresh}/> */}
    </div>
   
    <div className='w-1/2  ' >
    {/* <VisitorsForm refresh={refresh} setRefresh={setRefresh}/> */}
    < Usercomplaintlist  refresh={refresh} setRefresh={setRefresh}/>
   

    </div>
    </div>
    <UserFooter/>
    </div>



  )
}

export default UserComplaintPage
