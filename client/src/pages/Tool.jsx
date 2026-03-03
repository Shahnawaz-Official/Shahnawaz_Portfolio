import React from 'react'
import Tools from '../components/Tools'
import Footer from '../components/Footer'
function Tool() {
  document.title = "Shahnawaz | Tools"
  return (
    <div className='h-full w-full'>
        <Tools />
        <Footer />
    </div>
  )
}

export default Tool