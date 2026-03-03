import React from "react";

const Footer = () => {


  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Services",
    "Contact"
  ];

  return (
    <footer className="w-full bg-[#0F1117] text-white mt-6 border-t border-zinc-500/40">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] text-xl font-bold">
                &lt;/&gt;
              </span>
              <h1 className="text-transparent bg-clip-text bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] font-semibold text-lg">
                SHAHNAWAZ
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-[#9FF934] transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Center Section */}
          {/* Center Section */}
          <div className="space-y-3 text-center md:text-left md:pl-20">
            <p className="text-gray-400">
              © 2026 Shahnawaz. All Rights Reserved.
            </p>

            <p className="text-gray-400">
              mdshahnawaz.420bca@gmail.com
            </p>

            <p className="text-gray-400">
              +91 8603114665
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end items-center gap-6 text-2xl">
            <a
              href="https://github.com/Shahnawaz-Official"
              className="hover:text-[#9FF934] transition duration-300"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/md-shahnawaz-ms/"
              className="hover:text-[#9FF934] transition duration-300"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;