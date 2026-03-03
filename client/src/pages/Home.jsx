import React from 'react'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import NavComponent from "../components/NavComponent"
import Footer from "../components/Footer"
function Home() {
    document.title = "Shahnawaz | Home"
  return (
    <div className='h-full w-full'>
       <HeroSection />
       <Education />
      <NavComponent />
      <Footer />
    </div>
  )
}

export default Home