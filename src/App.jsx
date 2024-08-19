import React from 'react'
import "./index.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {

  const nav = useNavigate()
  return (
       <main>


   <Routes>
   <Route path="/" Component={Home} />
   <Route path="/about" Component={About} />
   <Route path="/contact" Component={Contact} />






   </Routes>






       </main>
  )
}

export default App