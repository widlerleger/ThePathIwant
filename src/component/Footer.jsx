import React from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import { useState } from 'react';


function Footer() {

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };

  return (
    <div  className='container-footer'>
       <h5>The path Iwant. </h5>
       <h5><a className=' hover:text-gray-500' href='mailto: legerwidler4@icloud.com'>Contact me</a></h5>
       <FaArrowCircleUp onClick={scrollToTop} className='icon-scroll'/>
    </div>
  )
}

export default Footer
