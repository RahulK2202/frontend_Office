import React, { useEffect, useState } from 'react';

import logs from "../../images/mainlogo.png";
import img1 from "../../images/meet.png";
import img2 from "../../images/visitor.jpeg";
import img3 from "../../images/img3.webp";
import img4 from "../../images/announ.png";
import { Link } from 'react-router-dom';

import { fetchAnnouncements } from '../../data/announcementApi';


function HomeBody() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    fetchAnnouncementData();
  }, []);

  const fetchAnnouncementData = async () => {
    try {
      const data = await fetchAnnouncements();
      console.log(data,"anuthing")
      setAnnouncements(data);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div>

     <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
               
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                <div className="flex  flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Hall Booking</h3>
    

                    <div className="mb-8 space-y-4 text-left">
                        <img className='object-cover w-full h-full' src={img1} ></img>
                    </div>
                    <Link to="/addmeeting" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900">
  Book Your Meeting Room
</Link>

                </div>



                <div className="flex  flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Visitor Registration</h3>
                    <div className="mb-8 space-y-4 text-left">
                        <img className='object-cover w-full h-full' src={img2}></img>
                    </div>
                    <Link to="/visitorpage" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Register your Visitor Here</Link>
                </div>

                <div className="flex  flex-col justify-between max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h5 className="mb-4 text-xl font-semibold">Requests & Complaints</h5>

                    <div className="mb-8 space-y-4 text-left">
                        <img className='object-cover w-full h-full' src={img3}></img>
                    </div>

                    

                    <Link to="/usercomplaints" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Register Your Complaints Here</Link>


                        </div>

                {/* <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Project Management</h3>

                    <div className="mb-8 space-y-4 text-left">
                        <img src={img4}></img>
                    </div>
                    <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Project Management</a>
                </div> */}

            </div>
        </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={img4} alt="feature image 2"/>

                
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Announcements</h2>
      <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="flex space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              <a className="text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 text-center dark:text-white dark:focus:ring-purple-900">
                {announcement.event}
              </a>
              <br/>
              <br/>
              <a className="text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 text-center dark:text-white dark:focus:ring-purple-900">
              {announcement.note}
              </a>
              
            </span>
          </li>
        ))}
      </ul>
    </div>
            </div>
        </div>
      </section>
        </div>
        )}





export default HomeBody