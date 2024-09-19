import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './component/MainLayouts'
import Home from './pages/Home'
import BlogFeed from './pages/BlogFeed'
import NotFoundpages from './component/NotFoundpages'
import BlogDetails from './pages/BlogDetails'


const router = createBrowserRouter([

   {
    path:"/ThePathIwant/",
    element: <MainLayouts/>,
    errorElement: <NotFoundpages/>,
      children:[{
        path:"/ThePathIwant/",
        element: <Home/>,
      },
      
      {
        path: "/ThePathIwant/BlogFeed",
        element: <BlogFeed/>
      },

    {
      path: "/ThePathIwant/:id",
      element: <BlogDetails/>
    }
    
    ]


   }


])


function App() {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
