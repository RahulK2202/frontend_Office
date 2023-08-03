import React, { useState, useEffect } from "react";

import UserNavbar from "../components/userside/UserNavbar";
import UserFooter from "../components/userside/UserFooter";

import LoadingSpinner from "../components/Utils/LoadingSpinner";
import ProfileUser from "../components/userside/ProfileUser";
import UserDashboardSidebar from "../components/userside/UserDashboardSidebar";

function UserProfilePages() {
 

  return (
    <div>
     
    < UserNavbar/>
   

    <div className="flex w-full">
      <div className="w-2/12 mt-20 "><UserDashboardSidebar/></div>

    <div className="w-10/12 mt-20 "> <ProfileUser/></div>
   

    </div>
    < UserFooter/>

    </div>
  );
}

export default UserProfilePages;
