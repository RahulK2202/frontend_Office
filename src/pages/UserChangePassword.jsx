import React from "react";

import UserNavbar from "../components/userside/UserNavbar";
import UserFooter from "../components/userside/UserFooter";

import UserDashboardSidebar from "../components/userside/UserDashboardSidebar";

import ChangePassword from "../components/userside/ChangePassworduser";

function UserChangePassword() {
 

  return (
    <div>
     
    < UserNavbar/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}
    <div className="flex gap-4">
      <div className="w-2/12 mt-20 "><UserDashboardSidebar/></div>

    <div className="w-9/12 mt-28 ">   < ChangePassword/>     </div>
   
   
    </div>
    < UserFooter/>

    </div>
  );
}

export default UserChangePassword;
