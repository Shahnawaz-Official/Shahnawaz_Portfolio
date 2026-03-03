import React from 'react'
import Profile from "../components/Profile"
import Education from '../components/Education'
import Footer from '../components/Footer'
function About() {
  document.title = "Shahnawaz | About Me"
  return (
    <div className='h-full w-full relative'>
      <h1 className='text-center mt-4  text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-12 font-bold'>About Me </h1>
      <Education />
      <Profile />
      <Footer />

      <div className="flex items-center absolute top-[86.5%]  right-8">
        <a
          className="mt-6 text-black px-4 py-3 rounded-xl font-semibold 
            bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] 
            hover:scale-105 transition-all cursor-pointer duration-300 shadow-lg"
          href="/login"
        >
          Only Admin
        </a>
      </div>
    </div>
  )
}

export default About