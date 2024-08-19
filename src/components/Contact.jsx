import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const nav=useNavigate()
  return (
    <div>Contact


        <p onClick={() => nav('/about')}>about</p>
    </div>
  )
}

export default Contact