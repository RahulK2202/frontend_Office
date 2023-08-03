import React from "react";
import UserNavbar from '../components/userside/UserNavbar'
import HomeBody from '../components/userside/HomeBody'
import UserFooter from '../components/userside/UserFooter'
import Banner from "../components/userside/Banner";

function UserHomePage() {
    return (
        <div>
            <header class=" w-full">
                <UserNavbar/>
            </header>
            <br/>
            <Banner />
            <HomeBody />

            <UserFooter/>
            </div>

    )
}

export default UserHomePage