import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Announcements from './Announcements';
import { fetchAnnouncements, addAnnouncement,deleteAnnouncement } from '../../data/announcementApi';

function AnnouncementTable() {
  const [announcements, setAnnouncements] = useState([]);



  const fetchAnnouncementData = async () => {
    try {
      const data = await fetchAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAnnouncementData();
  }, []);

  
  const handleAddAnnouncement = async (newAnnouncement) => {
    try {
      const createdAnnouncement = await addAnnouncement(newAnnouncement);
      setAnnouncements((prevAnnouncements) => [createdAnnouncement, ...prevAnnouncements]);
    } catch (error) {
      console.error(error);
    }
  };

 
  



  const handleDeleteAnnouncement= async (announcementId) => {
    try {
      // Show a confirmation dialog
      const result = await Swal.fire({
        title: 'Do you really want to delete this announcement?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
      });
  
      if (result.isConfirmed) {
        await deleteAnnouncement(announcementId);
        console.log('Announcement deleted successfully');
        setAnnouncements((prevAnnouncements) =>
          prevAnnouncements.filter((announcement) => announcement.id !== announcementId)
        );
      }
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };
  






  return (
    <div>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
            Announcement Lists
          </div>
          <td>
            <br />
            {/* <Announcements onAdd={addAnnouncement} /> */}
            <Announcements onAdd={handleAddAnnouncement} />

          </td>
          <br />



          <div className="p-3">
  <table className="table-responsive w-full rounded">
    <thead>
      <tr>
        <th className="border px-4 py-2">Id</th>
        <th className="border w-1/2 px-4 py-2">Event</th>
        <th className="border w-1/2 px-4 py-2">Notes</th>
        <th className="border w-1/2 px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {announcements.map((announcement) => (
        <tr key={announcement.id}>
          <td className="border px-4 py-2">{announcement.id}</td>
          <td className="border px-4 py-2">{announcement.event}</td>
          <td className="border px-4 py-2">{announcement.note}</td>
          <td className="border px-4 py-2">
            <button
              className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500"
              onClick={() => handleDeleteAnnouncement(announcement.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




        </div>
      </div>
    </div>
  );
}

export default AnnouncementTable;
