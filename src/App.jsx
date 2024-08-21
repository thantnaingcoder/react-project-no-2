import React from 'react'
import "./index.css"
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ScrollNav from './components/ScrollNav'

const App = () => {

  const nav = useNavigate()
  return (
    <>
    
    <ScrollNav/>
    <Outlet/>
    
    </>
        
  )
}

export default App