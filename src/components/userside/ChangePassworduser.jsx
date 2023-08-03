import React, { useContext, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from '../../API/Api';

function ChangePassworduser() {
  const { user } = useContext(AuthContext);
  const [oldpass, setOldpass] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const {setUser} = useContext(AuthContext)

  const navigate = useNavigate();

  console.log(user,"hiiiiiiiiiiiii");
  const ChangePass = async (e) => {
    e.preventDefault();
    try {
      
      if (pass1 === pass2) {
        const res = await axios.post(`${BACKEND_BASE_URL}user/changepass/`, {
          oldpass,
          password: pass1,
          user_id: user.user_id,
        });
        if (res.data.msg === 500) {
          toast.error('Old Password Not match');
        } else {
          e.target.reset();
          Cookies.remove("access_token")
          setUser(null)
          toast.success('Password changed');
          navigate("/user")
        }
        console.log(res.data);
      } else {
        toast.error("Passwords didn't match");
      }
    } catch (err) {
      toast.error('Something went wrong...');
    }
  };

  return (

    <div>
      


      <div className='w-full '>


    

    <div className='px-5 w-full h-full  mx-3 mt-2  py-5 font-poppins flex flex-col place-content-start place-items-center bg-white shadow-xl rounded-xl'>
        <Toaster position='top-center' reverseOrder='false' ></Toaster>
        <div class="overflow-hidden  m-5 w-full">
            <div className='w-full '>
                <h1 className='font-bold text-3xl '>Change Password</h1>
            </div>
            <div className="flex items-center w-full  px-4 py-12">
              
                <form className="login-input mt-8" onSubmit={ChangePass}>
<input
  className="bg-white h-9 w-11/12 border-2 rounded-full mt-5 placeholder-pink-300 outline-none text-black px-6"
  
  type="text"

  name="first_name"
  placeholder="Enter the old password"
  onChange={e => setOldpass(e.target.value)}
/>

<input
  className="bg-white h-9 w-11/12 border-2 rounded-full mt-5 placeholder-pink-300 outline-none text-black px-6"
 
  type="password"
  name="last_name"
  
  placeholder="Enter new password"
  onChange={e => setPass1(e.target.value)}
/>

<input
  className="bg-white h-9 w-11/12 border-2 rounded-full mt-5 placeholder-pink-300 outline-none text-black px-6"

  type="password"
 
 
  placeholder="confirm password"
  onChange={e => setPass2(e.target.value)} 
/>

<div className="w-full flex justify-center mt-6">
  <button
    type="submit"
    className="bg-green-500 text-black font-semibold text-md px-1 py-1 w-1/6 rounded-xl text-center"
  >
    Save
  </button>
</div>
</form>
            </div>
        </div>

    </div>
{/* </div> */}
</div>




    </div>


  )
}

export default ChangePassworduser
