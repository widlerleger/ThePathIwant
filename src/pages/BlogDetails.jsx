import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogData'
import { Link } from 'react-router-dom'

function BlogDetails() {

  const {id} = useParams()
  const {title, image, author, description, article, createdAt, 

  } = blogs.find((blog)=> String(blog.id)===id)

  


  return (
    <div className=' h-full flex  flex-col items-center  mt-10 gap-8 p-5'>
      <img className=' w-[600px] rounded-md md:w-[60%] ' src={image} />
       <div className='max-w-[900px] gap-6'> 
        <h1 className='text-5xl font-bold text-start '>{title}</h1> <br/>
        <p className='text-light text-xl mb-5'>Write by: <span className='text-blue-600'><Link to={"/"}>{author}</Link></span></p>
        <h2 className='text-light text-xl font-serif '>{description}</h2>
       </div>
     
     <article className='max-w-[900px]'>
           <div> 
               <h2 className='text-bold text-4xl '>{article.h2}</h2><br/>
               <p className='text-xl font-serif'>{article.p2}</p> <br/>
               <br/>

               <h3 className='text-3xl'>{article.h3}</h3><br/>
               <p className='text-xl font-serif text-light'>{article.p3}</p><br/>
               <br/>
               <h4 className='text-3xl'>{article.h4}</h4><br/>

                {/* display list is true else empty string. */}
         { <div>
              <ul  className=' grid text-2xl font-serif list-disc ml-6 p-2 gap-y-7 marker:text-orange-400'>
                  {article.Ul.li1 === ""? "": <li>{article.Ul.li1}</li>}
                 { article.Ul.li2 === ""? "": <li>{article.Ul.li2}</li>}
                 { article.Ul.li3 === ""? "": <li>{article.Ul.li3}</li>}
                 { article.Ul.li4 === ""? "": <li>{article.Ul.li4}</li> }
                 {  article.Ul.li5 === ""? "": <li>{article.Ul.li5}</li>}
                 { article.Ul.li6 === ""? "": <li>{article.Ul.li6}</li>}
          
              </ul>  

               </div> 
               } 
               <p className='text-xl font-serif text-light mt-5 '>{article.p4}</p><br/>

               <h5 className='font-bold text-2xl '>{article.h5}</h5><br/>
               <p className='text-xl font-serif  text-light '>{article.p5}</p>

           </div>
     </article>
     <p className=' self-start  md:self-center'> Publish: {createdAt}  <Link to={"/BlogFeed"} className='text-blue-600 text-xl font-serif'> Learn more</Link></p>
         
    </div>
  )
}

export default BlogDetails
