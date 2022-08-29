import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'


const Format = ({children}) => {
  return (
    <>
       <Navbar/>
          <div className="container">
             {children}
          </div>
       <Footer/>

       
    </>
  )
}

export default Format