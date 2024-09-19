import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundpages() {
  return (
    <div>
           <div className='h-full flex flex-col justify-center items-center mt-[10%] gap-6' >

                <h1 className=' text-bold text-5xl'> Ooops! 404</h1>
                <h2 className='text-2xl'> The page your looking for does not exist</h2>
                <Link className='font-mono text-2xl p-3  cursor-pointer hover:bg-gray-400 rounded-md bg-[#ffeac0]' to={"/ThePathIwant/"}>Go back</Link>


           </div>
    </div>
  )
}

export default NotFoundpages
