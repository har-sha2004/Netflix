import React from 'react'

function Footer() {
  return (
    <div className='bg-black flex flex-col items-center'>
      
        <img className='w-32' src="/assets/netflix.png" alt="" />
        <h1>entertain your loved ones in home</h1>
        <div className="flex gap-5 ">
          <p className='hover:underline'>About</p>
          <p className='hover:underline'>Premium</p>
          <p className='hover:underline'>Campaign</p>
          <p className='hover:underline'>Blog</p> 
          
        </div>
      
    </div>
  )
}

export default Footer
