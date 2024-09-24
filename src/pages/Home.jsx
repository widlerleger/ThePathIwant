import React from 'react'
import {Link} from "react-router-dom"

function Home() {

  return (
    <div >

      <div className="container-img">
         <img src="./src/assets/image/widlerleger1.png" alt="Widler Leger"width={350}/>
         <img src="./src/assets/image/widlerleger.png" alt="Widler Leger"  width={350}/>
      </div>

        <div className='container-p-b'>
          <h2 className='para-h2 text-lg'> The journey of my life need to be shared! Throught my life I have been so blessed. Jesus is everything for me, God is my provider and my savior and I am greatful for that. I created this website to shared all the experiences that I recognized throughtout my journey. Thank you!
          <br/>
          <span className='blue-text'>
          The Path IWant.</span ></h2>

          <Link className='Link-blog-btn' to={"/ThePathIwant/BlogFeed"}> View blog</Link>
          </div>

    </div>
  )
}

export default Home
