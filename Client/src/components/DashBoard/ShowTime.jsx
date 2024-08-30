import React from 'react'
import Sidebar from './Sidebar'
import ShowTime from "./Showtime-component"

const ShowTimes = () => {
  return (
    <div className='flex flex-row h-screen w-screen' >
      <Sidebar /> <ShowTime/>

    </div>
  )
}

export default ShowTimes