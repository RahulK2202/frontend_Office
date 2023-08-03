import React, { useState, useEffect ,useContext} from "react";
import AuthContext from '../components/Contexts/AuthContext';
import UserNavbar from '../components/userside/UserNavbar'
import AddMeeting from './AddMeeting';
import UserFooter from '../components/userside/UserFooter'
import UserMeetingTable from "../components/userside/UserMeetingTable";
import LoadingSpinner from "../components/Utils/LoadingSpinner";

function BookMeetingPage() {


    // const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh , setRefresher] = useState(false)

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner/>
        </div>
      );
  }


//   if (!user || !user.user_id) {
//     return null; 
//   }



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
        <UserMeetingTable refresh={refresh} setRefresher={setRefresher}/>
   
   
    </div>
   
    <div className='w-1/2  ' >
    <AddMeeting refresh={refresh} setRefresher={setRefresher}/>
    </div>
    </div>
    <UserFooter/>






            </div>

    )
}

export default BookMeetingPage