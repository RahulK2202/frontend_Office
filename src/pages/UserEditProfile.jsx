import React, { useState, useEffect } from "react";

import UserNavbar from "../components/userside/UserNavbar";
import UserFooter from "../components/userside/UserFooter";

import LoadingSpinner from "../components/Utils/LoadingSpinner";
import ProfileUser from "../components/userside/ProfileUser";
import UserDashboardSidebar from "../components/userside/UserDashboardSidebar";
import EditEmployee from "../components/adminside/EditEmployee";
import UserEditHome from "../components/userside/UserEditHome";

function UserEditProfile() {
 

  return (
    <div>
     
    < UserNavbar/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}

    <div className="flex gap-4">
      <div className="w-2/12 mt-20 "><UserDashboardSidebar/></div>

    <div className="w-9/12 mt-40">   < UserEditHome/>     </div>
   

    </div>
    < UserFooter/>

    </div>
  );
}

export default UserEditProfile;
