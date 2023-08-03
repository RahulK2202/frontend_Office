import React, { useState, useEffect } from "react";

import UserNavbar from "../components/userside/UserNavbar";
import UserFooter from "../components/userside/UserFooter";

import LoadingSpinner from "../components/Utils/LoadingSpinner";
import ProfileUser from "../components/userside/ProfileUser";
import UserDashboardSidebar from "../components/userside/UserDashboardSidebar";
import UserLeave from "../components/userside/UserLeave";
import UserCalendar from "../components/Calender/UserCalendar";

function UserLeavePage() {
 

  return (
    <div>
     
    < UserNavbar/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}

    <div className="flex gap-2 ">
      <div className="w-2/12 mt-20 "><UserDashboardSidebar/></div>

     
    <div className="w-10/12 mt-28"> <UserCalendar/></div>
    
   

    </div>
    < UserFooter/>

    </div>
  );
}

export default UserLeavePage;
