import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full  bg-[#0F1117] text-white flex items-center sm:px-10 lg:pt-24 px-6 lg:px-20 pt-24">

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1D24] border border-green-500/30 text-green-400 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available for Full-Time Opportunities | Immediate Joiner
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Full{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59]">
              Stack
            </span>{" "}
            <br />
            Developer
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg  max-w-xl mb-10">
            I'm <span className="text-white  font-semibold">Shahnawaz</span> —
            , a passionate Full-Stack Developer currently pursuing BCA.
            I develop modern and responsive web applications using the MERN stack and
            focus on clean code and secure backend systems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* CV KA URL DE */}
            <a
              href="/Shahnawaz_CV.pdf"
              className="rounded-full border mt-5 border-gray-600 
  font-semibold text-black 
  bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59]
  px-4 py-2 text-sm
  sm:px-6 sm:py-3 sm:text-base
  hover:scale-105
  transition-all duration-300 ease-in-out
  cursor-pointer inline-block text-center"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="rounded-full border mt-5 border-gray-600
  px-4 py-2 text-sm
  sm:px-6 sm:py-3 sm:text-base
  hover:border-gray-600 
  hover:bg-linear-to-r 
  hover:from-[#9FF934] 
  hover:via-[#6EE545] 
  hover:to-[#30CB59] 
  hover:text-black hover:font-semibold
  transition duration-300 
  cursor-pointer inline-block text-center"
            >
              Let's Contact →
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0">

  {/* Gradient Ring */}
  <div className="absolute 
    w-48 h-48 
    sm:w-60 sm:h-60 
    md:w-72 md:h-72 
    lg:w-80 lg:h-80 
    rounded-full border-4 border-green-400">
  </div>

  {/* Image Wrapper */}
  <div className="
    w-40 h-40
    sm:w-52 sm:h-52
    md:w-64 md:h-64
    lg:w-72 lg:h-72
    rounded-full overflow-hidden relative z-10 shadow-xl
  ">
    <img
      src="/myphoto.jpeg"
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>

</div>

      </div>

    </section>
  );
};

export default HeroSection;