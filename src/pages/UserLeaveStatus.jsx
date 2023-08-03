import React from "react";

import UserNavbar from "../components/userside/UserNavbar";
import UserFooter from "../components/userside/UserFooter";

import UserDashboardSidebar from "../components/userside/UserDashboardSidebar";


function UserLeaveStatus() {
 

  return (
    <div>
     
    < UserNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="flex gap-4">
      <div className="w-2/12 mt-20 "><UserDashboardSidebar/></div>
{/* 
     <UserLeave/>
     
    <div className="w-full "> <UserCalendar/></div> */}
    
   

    </div>
    < UserFooter/>

    </div>
  );
}

export default UserLeaveStatus;
