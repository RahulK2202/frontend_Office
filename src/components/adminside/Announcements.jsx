import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { BACKEND_BASE_URL } from '../../API/Api';

function Announcements() {
  const [event, setEvent] = useState("");
  const [notes, setNotes] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "event") {
      setEvent(value);
    } else if (name === "notes") {
      setNotes(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("event", event);
    form.append("note", notes);

    try {
      const res = await axios.post(`${BACKEND_BASE_URL}/user/announcements/`, form);
      console.log(res.data);
      Navigate("/announcement")
    } catch (error) {
      console.error(error);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitData = (e) => {
    e.preventDefault();
    handleSubmit(e);
    closeModal();
    
  };

  return (
    <div>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
        onClick={toggleModal}
      >
        Add Announcements
      </button>

      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 inset-0 bg-gray-500 opacity-95 flex items-center justify-center shadow-white h-full"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold">Add Announcement</h1>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                data-modal-hide="authentication-modal"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body bg-white">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="event"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Event
                  </label>
                  <input
                    type="text"
                    name="event"
                    id="event"
                    value={event}
                    onChange={handleInputChange}
                    className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter Event"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="notes"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Notes
                  </label>
                  <input
                    type="text"
                    name="notes"
                    id="notes"
                    value={notes}
                    onChange={handleInputChange}
                    className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter Notes"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcements;
