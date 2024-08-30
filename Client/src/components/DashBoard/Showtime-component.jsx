
import React from 'react'
const Showtimes= () => {
  return (
    <div className=' relative flex  h-full w-full overflow-y-scroll bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 -z-10 wrap ' >   
      <div className='flex items-center flex-col bg-blue-400 bg-opacity-60 border-2 border-black rounded-xl z-41 h-[400px] w-[400px] ml-6 mt-2 gap-y-2'>
             <h2 className='font-bold text-black text-3xl'>Theater Name:</h2>
         <h1 className='font-bold text-black text-xl'>Inox</h1>
             
             <button className='bg-gradient-to-r from-pink-500 to-blue-900 font-bold py-2 px-4 rounded-lg shadow-md hover:from-pink-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
              Set Show Time
             </button>
      </div>
        <div className='bg-white bg-opacity-90 shadow-md border-2 border-black rounded-md z-41 h-[400px] w-[400px] ml-6 mt-2'>
             <h1 className='font-bold'>Theater Name:</h1>
             <p>Inox</p>
           
      </div>
   
    </div>
  )
}

export default Showtimes

