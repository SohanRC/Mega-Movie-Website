import React from 'react'
import Sidebar from './Sidebar'
import Theaters from "./Theaters-component"

const Theater = () => {
  return (
    <div className='flex flex-row h-screen w-screen' >
      <Sidebar /> <Theaters/>

    </div>
  )
}

export default Theater