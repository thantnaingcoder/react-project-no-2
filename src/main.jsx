import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Treatment from './components/Treatment.jsx'
import { CarouselSpacing } from './components/CarouselSpacing.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element  : <Home/>
      } ,
      { path : "/about",
        element : <About/>
      } ,
      { path : "/treatment",
        element : <Treatment/>
      } ,
      { path : "/doctor",
        element : <CarouselSpacing/>
      } 
      
    ]
      
    
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    
  
)
