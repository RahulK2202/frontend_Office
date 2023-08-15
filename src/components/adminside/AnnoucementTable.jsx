import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Announcements from './Announcements';
import { fetchAnnouncements, addAnnouncement, deleteAnnouncement } from '../../data/announcementApi';
import Pagination from '../../Pagination/Pagination'; // Make sure to adjust the import path

function AnnouncementTable() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

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

  const handleDeleteAnnouncement = async (announcementId) => {
    try {
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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredAnnouncements.length / itemsPerPage);
  const displayedAnnouncements = filteredAnnouncements.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
            Announcement Lists
          </div>
          <div className="mb-4 mt-2 px-2">
            <input
              type="text"
              placeholder="Search by Event"
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border rounded w-full"
            />
          </div>
          <div className="p-3">
            <table className="table-responsive w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Id</th>
                  <th className="border w-1/2 px-4 py-2">Event</th>
                  <th className="border w-1/2 px-4 py-2">Notes</th>
                  <th className="border w-1/2 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedAnnouncements.map((announcement) => (
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
          <div className="flex justify-center mt-4">
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementTable;
