import React from 'react'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import NavComponent from "../components/NavComponent"
function Contact() {
    document.title = "Shahnawaz | Contact"
  return (
    <div className='h-full w-full '>
        <ContactSection />
        <Profile />
        <NavComponent />
        <Footer />
        
     
        
    </div>
  )
}

export default Contact