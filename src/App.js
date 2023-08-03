import React from 'react';
import AdminLogin from './components/adminside/AdminLogin';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import { AuthProvider } from "./components/Contexts/AuthContext"
import UserLoginHome from './pages/UserLoginHome';
import MyCustomLandingPage from './pages/MyCustomLandingPage'
import UserHomePage from './pages/UserHomePage';
import AdminDashboard from './pages/AdminDashboard'
import AdminUserProfileEdit from './pages/AdminUserProfileEdit';
import AdminDepartment from './pages/AdminDepartment';
import BookMeetingPage from './pages/BookMeetingPage';
import AdminMeeting from './components/adminside/AdminMeeting';
import AdminAnnoucement from './pages/AdminAnnoucement';
import VisitorPage from './pages/VisitorPage';
import AdminMeetingEdit from './pages/AdminMeetingEdit';
import AdminVisitorPage from './pages/AdminVisitorPage';
import UserProfilePages from './pages/UserProfilePages';
import UserEditProfile from './pages/UserEditProfile';
import UserChangePassword from './pages/UserChangePassword';
import AdminUserList from './pages/AdminUserList';
import AdminComplaints from './pages/AdminComplaints';
import UserComplaintPage from './pages/UserComplaintPage';
import EditDepartment from './components/adminside/EditDepartment';
import ProjectAdmin from './components/adminside/ProjectAdmin';
import AdminProjectPages from './pages/AdminProjectPages';
import AddProject from './components/adminside/AddProject';
import AdminListProject from './pages/AdminListProject';
import ProjectList from './components/adminside/ProjectList';
import AadminProjectEdit from './pages/AadminProjectEdit';
import UserLeavePage from './pages/UserLeavePage';
import AdminLeavePage from './pages/AdminLeavePage';
import PageNotFound from './pages/PageNotFound';
import UserTaskPage from './pages/UserTaskPage';
import AdminProtectedRoutes from './ProtectedRoutes/AdminProtectedRoutes';
import UserProtectedRoutes from './ProtectedRoutes/UserProtectedRoutes';
import UserAppliedLeaves from './pages/UserAppliedLeaves';



function App() {

  const token = localStorage.getItem("access_token");
console.log("token here got",token)


  return (
 
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Admin links */}
            
            <Route path="/admin" element={token ? <Navigate to="/dashboard" /> : <AdminLogin />} />

            <Route path="/dashboard" element={<AdminProtectedRoutes > < AdminDashboard /></AdminProtectedRoutes>
            } />

            <Route path="/userlist" element={<AdminProtectedRoutes > <AdminUserList  /></AdminProtectedRoutes>
            } />


            <Route path="/depart" element={<AdminProtectedRoutes > <AdminDepartment  /></AdminProtectedRoutes>
            } />
         

            <Route path="/meeting" element={<AdminProtectedRoutes > <   AdminMeeting  /></AdminProtectedRoutes>
            } />
           
            <Route path="/adminleave" element={<AdminProtectedRoutes > <  AdminLeavePage  /></AdminProtectedRoutes>
            } />
           
            <Route path="/addproject" element={<AdminProtectedRoutes > <   AdminListProject  /></AdminProtectedRoutes>
            } />
            
            <Route path="/adminproject" element={<AdminProtectedRoutes > <   AdminProjectPages  /></AdminProtectedRoutes>
            } />
           
            <Route path="/adminvisitor" element={<AdminProtectedRoutes > <    AdminVisitorPage  /></AdminProtectedRoutes>
            } />
           
            <Route path="/complaints" element={<AdminProtectedRoutes > <    AdminComplaints  /></AdminProtectedRoutes>
            } />
            
            <Route path="/announcement" element={<AdminProtectedRoutes > <    AdminAnnoucement  /></AdminProtectedRoutes>
            } />


            <Route path="/editproject/:id" element={<AdminProtectedRoutes > <    AadminProjectEdit  /></AdminProtectedRoutes>
            } />


            <Route path="/employeedit/:id" element={<AdminProtectedRoutes > <    AdminUserProfileEdit  /></AdminProtectedRoutes>
            } />

            <Route path="/editmeeting/:id" element={<AdminProtectedRoutes > <     AdminMeetingEdit  /></AdminProtectedRoutes>
            } />

           

            {/* UserLinks */}

            <Route path="/user" element={token ? <Navigate to="/home" /> : <UserLoginHome  />} />

            <Route path="" element={<MyCustomLandingPage />} />

            <Route path="/home" element={<UserProtectedRoutes><UserHomePage/></UserProtectedRoutes>}/>

            <Route path="/addmeeting" element={<UserProtectedRoutes><BookMeetingPage/></UserProtectedRoutes>}/>

            <Route path="/visitorpage" element={<UserProtectedRoutes><VisitorPage/></UserProtectedRoutes>}/>

            

            <Route path="/profileuser" element={<UserProtectedRoutes><UserProfilePages/></UserProtectedRoutes>}/>

            <Route path="/profileuseredit" element={<UserProtectedRoutes><UserEditProfile/></UserProtectedRoutes>}/>

            <Route path="/changepass" element={<UserProtectedRoutes><UserChangePassword/></UserProtectedRoutes>}/>

            <Route path="/usercomplaints" element={<UserProtectedRoutes><UserComplaintPage/></UserProtectedRoutes>}/>

            <Route path="/userleave" element=
            {<UserProtectedRoutes><UserLeavePage/></UserProtectedRoutes>}/>

            <Route path="/usertask" element={<UserProtectedRoutes><UserTaskPage/></UserProtectedRoutes>}/>

            <Route path="/userapplied" element={<UserProtectedRoutes><UserAppliedLeaves/></UserProtectedRoutes>}/>
        

            <Route path="/*" element={< PageNotFound />} />


          </Routes>
        </Router>
      </AuthProvider>

    </div>
  
  );
}

export default App;
