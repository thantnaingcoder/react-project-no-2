import React from 'react'

const Layout = ({children}) => {
  return (
        <div className=' container max-w-full mx-auto   w-6/6  md:w-5/6 lg:4/6  '>

            {children}

        </div>
  )
}

export default Layout