import React from 'react'
import Sidebar from './Sidebar'
import Movies from "./Dashboard"
const Layout = () => {
  return (
    <div className='flex flex-row h-screen w-screen' >
      <Sidebar />  <Movies/> 
    </div>
  )
}

export default Layout