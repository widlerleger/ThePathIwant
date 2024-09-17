import React from 'react'
import blogs from '../../data/blogData'
import { Link } from 'react-router-dom'



function BlogFeed() {
  
    // const {id, description, image, title, author, article, createdAt, } = blogs

    const displayBlogs = blogs.map((blog)=>{
        return <div className='' key={blog.id}>

              <div className='h-full flex flex-col items-center'>
            
                      <div className='flex flex-row  justify-start grow object-fill  flex-wrap  m-6 items-center' >
                                <img src={blog.image} alt={blog.title} className='img-blog'/>

                              <div className=' flex flex-col max-w-md gap-3 ml-10 m-5'>
                                <h1 className='font-light text-4xl'>{blog.title}</h1>
                                <span className='text-3x  font-ligth'> Write by: {blog.author}</span>
                                <h2 className='text-3x  font-ligth'>{blog.description}</h2>
                                <Link  className= 'p-5 bg-blue-300 text-center hover:bg-gray-300 rounded-lg max-w-300 text-xl 'to={`/${blog.id}`} >Read more</Link>
                                </div>

                        </div>

               </div>
           
        </div>
    })

  return (
    <div>
        {displayBlogs}
    </div>
  )
}

export default BlogFeed
