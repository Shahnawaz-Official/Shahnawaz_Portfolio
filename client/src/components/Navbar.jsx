import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Tools",
    "Contact",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#0F1117] text-white fixed top-0 left-0 z-50  ">
        <div className="flex items-center justify-between h-20 px-6 md:px-10">

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
          <div className="hidden lg:flex items-center gap-6 p-0.5 rounded-2xl bg-linear-to-r from-zinc-700 via-zinc-600 to-zinc-700">
            <ul className="flex items-center gap-6 bg-[#0F1117] px-4 py-2 rounded-2xl">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="px-4 py-2 rounded-full font-medium transition-all duration-300
                  hover:text-black
                  hover:bg-linear-to-r
                  hover:from-[#9FF934]
                  hover:via-[#6EE545]
                  hover:to-[#30CB59]"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>

          {/* Desktop Hire Button */}
          <a href="/contact" className="hidden lg:block cursor-pointer text-black px-6 py-2 rounded-lg font-semibold 
            bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] 
            hover:scale-105 transition-all duration-300 shadow-lg">
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-menu-3-line"></i>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0F1117] z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-6 text-3xl cursor-pointer">
          <i
            className="ri-close-large-line"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col space-y-5 px-6 mt-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              onClick={() => setMenuOpen(false)}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="px-4 py-3 rounded-xl font-semibold transition-all duration-300
              hover:text-black
              hover:bg-linear-to-r
              hover:from-[#9FF934]
              hover:via-[#6EE545]
              hover:to-[#30CB59]
              hover:shadow-lg hover:scale-105"
            >
              {item}
            </Link>
          ))}

          {/* Mobile Hire Button */}
          <a href="/contact" className="mt-6 text-black px-4 py-3 rounded-xl font-semibold 
            bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] 
            hover:scale-105 transition-all cursor-pointer duration-300 shadow-lg">
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;