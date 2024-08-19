import React from 'react'

const Layout = ({children}) => {
  return (
        <div className=' max-w-full container w-5/6 mx-auto '>

            {children}

        </div>
  )
}

export default Layout