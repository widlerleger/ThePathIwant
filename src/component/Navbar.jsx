import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="main-container-nav">

       <div className='flex-img'>
         <Link to={"/ThePathIwant/"} ><img src='./src/assets/image/The Path Iwant.png'/></Link>
       </div>

          <div className='flex-navig'>
            <NavLink className="menu" to={"/ThePathIwant/"}>Home</NavLink>
            <NavLink className="menu" to={"/ThePathIwant/BlogFeed"}>Blog</NavLink>
            </div>
    </div>
  )
}

export default Navbar
