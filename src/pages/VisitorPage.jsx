import React,{useState} from 'react'
import UserFooter from '../components/userside/UserFooter'
import UserNavbar from '../components/userside/UserNavbar'
import VisitorsForm from './../components/userside/VisitorsForm';
import VisitorTable from './../components/userside/VisitorTable';
import LoadingSpinner from '../components/Utils/LoadingSpinner';

function VisitorPage() {

  const[refresh,setRefresh]=useState(false)
    

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
   
    <VisitorTable refresh={refresh} setRefresh={setRefresh}/>
    </div>
   
    <div className='w-1/2  ' >
    <VisitorsForm refresh={refresh} setRefresh={setRefresh}/>
    </div>
    </div>
    <UserFooter/>
    </div>



  )
}

export default VisitorPage