import React, { useState } from 'react';
import hero from '../images/hero.png'
import back from '../images/back.png'
import people from '../images/people.png'
import manager from '../images/manager.jpeg'
import { useNavigate } from 'react-router-dom';






const MyCustomLandingPage = () => {
  const navigate = useNavigate();
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClick = () => {
    // Navigate to a specific route on button click
    navigate('/user');
  };


  return (
    <div className="leading-normal bg-gradient-to-r  bg-indigo-600  tracking-normal text-white gradient" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      {/* Nav */}
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
             

              
            OfficeXpert
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={toggleNav}
            >
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${isNavOpen ? 'block' : 'hidden'}`} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
            
            </ul>
            <button onClick={handleClick}
              
             
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>


      <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          {/* <p className="uppercase tracking-loose bg-white  w-full">What business are you?</p> */}
          <h1 className="my-4 text-5xl font-bold leading-tight">
          An office management companion <br />
                     
          </h1>
          <p className="leading-normal text-2xl mb-8">
        
          your trusted sidekick that accompanies you wherever you go.
                     
          </p>
          {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button> */}
        </div>
    
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={back} alt="Hero" />
        </div>
      </div>
    </div>



    <div className="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>
    </div>









    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          join now
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            #OfficeXpert: Empowering Efficiency, Simplifying Success
            </h3>
            <p className="text-gray-600 mb-8">
            Effortlessly manage leave requests and attendance tracking with Office Expert. Streamline the process, eliminate paperwork, and ensure accurate records, empowering your team to focus on what matters most
              <br />
              <br />
           
            </p>

            


          </div>
          <div class="w-full sm:w-1/2 p-6">

          <img className="w-full md:w-4/5 z-50" src={people} alt="Hero" />
          </div>


      
        </div>
      </div>
    </section>


    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
       Our Services
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                xGETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
              Visitor Management
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
              Requesting and managing visitor approvals has never been
                    easier. Say goodbye to manual paperwork and complicated
                    processes. Simply open the app, enter the visitor's details,
                    and submit a request for approval. 
                 
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              {/* <button className="mx-auto lg:mx-0 hover:underline gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                xGETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
              Request & Complaints
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
              Manage requests and complaints effortlessly with our Office
                Management App. Our intuitive platform empowers employees to
                submit requests and voice their concerns in a streamlined and
                efficient manner.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              {/* <button className="mx-auto lg:mx-0 hover:underline gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                xGETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
              Attendance & Leave
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
              Through the app, employees can easily create and submit
                requests or complaints, providing all the necessary details
                for prompt resolution. The requests are automatically assigned
                to the relevant department 
            
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              {/* <button className="mx-auto lg:mx-0 hover:underline gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Call to Action
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Action!
      </button>
    </section> */}











    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              
              OfficeXpert
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </footer>













    </div>











  );
};

export default MyCustomLandingPage;
