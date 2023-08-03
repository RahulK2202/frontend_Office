import React ,{useState}from 'react';

const AdminNavbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const profileToggle = () => {
    // Profile toggle functionality
  };

  return (
<header className="bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="inline-flex items-center">
          <i
            className="fas fa-bars pr-2 text-white cursor-pointer md:hidden"
            onClick={toggleSidebar}
          ></i>
          <h1 className="text-white text-lg font-semibold">Admin</h1>
        </div>
        {/* Add any other Navbar elements here */}
      </div>
    </header>
  );
};

export default AdminNavbar;