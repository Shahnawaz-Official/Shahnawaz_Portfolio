import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminNav = () => {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isLoggedIn) return null;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-black text-white px-6 py-4 shadow-lg relative">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] text-xl font-bold">
            &lt;/&gt;
          </span>
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] font-semibold text-lg">
            SHAHNAWAZ
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <Link to="/upload">
            <button className="text-black px-6 py-2 cursor-pointer rounded-lg font-semibold 
              bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] 
              hover:scale-105 transition-all duration-300 shadow-lg">
              Upload Project
            </button>
          </Link>

          <Link to="/upload/certificate">
            <button className="text-black px-6 py-2 rounded-lg font-semibold 
              bg-linear-to-r from-[#9FF934] via-[#6EE545] cursor-pointer to-[#30CB59] 
              hover:scale-105 transition-all duration-300 shadow-lg">
              Upload Certificate
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-lg font-semibold bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ?<i className="ri-close-line"></i> : <i className="ri-menu-3-line"></i>}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden bg-[#111] p-4 rounded-lg">
          
          <Link to="/upload" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-black px-4 py-2 rounded-lg cursor-pointer font-semibold 
              bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59]">
              Upload Project
            </button>
          </Link>

          <Link to="/upload/certificate" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-black px-4 cursor-pointer py-2 rounded-lg font-semibold 
              bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59]">
              Upload Certificate
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 rounded-lg font-semibold cursor-pointer bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
};

export default AdminNav;