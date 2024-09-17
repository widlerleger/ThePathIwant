import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './component/MainLayouts'
import Home from './pages/Home'
import BlogFeed from './pages/BlogFeed'
import NotFoundpages from './component/NotFoundpages'
import BlogDetails from './pages/BlogDetails'


const router = createBrowserRouter([

   {
    path:"/",
    element: <MainLayouts/>,
    errorElement: <NotFoundpages/>,
      children:[{
        path:"/",
        element: <Home/>,
      },
      
      {
        path: "/BlogFeed",
        element: <BlogFeed/>
      },

    {
      path: "/:id",
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
