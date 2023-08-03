import React, { useState } from 'react';

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <div className="w-full text-white bg-main-color">
        <div
          x-data={{ open: false }}
          className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          {/* <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
            >
              example profile
            </a> */}
            {/* <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  x-show={!open}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  x-show={open}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}




          {/* </div> */}
          {/* <nav className={`flex-col flex-grow pb-4 md:pb-0 ${open ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
            <div
              onClick={() => setOpen(false)}
              className="relative"
              x-data={{ open: false }}
            >
              <button
                onClick={() => setOpen(!open)}
                className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline"
              >
                <span>Jane Doe</span>
                <img
                  className="inline h-6 rounded-full"
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  alt=""
                />
                <svg
                  className="w-4 h-4 mt-1 ml-1 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
                  ></path>
                </svg>
              </button>
            </div>
          </nav> */}
        </div>
      </div>

      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 mr-4 rounded-full"
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Jane Doe</h2>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
              <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg">
                Add Friend
              </button>
            </div>
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">About</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum augue ut nunc malesuada
                ultricies. Pellentesque euismod justo id posuere scelerisque. Phasellus quis dolor vitae lacus
                aliquam gravida. Aenean metus mi, commodo eget felis a, vehicula tempor velit. Integer in
                lorem nec magna consectetur porttitor at nec leo.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Friends</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
