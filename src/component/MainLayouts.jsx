import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function MainLayouts() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default MainLayouts
