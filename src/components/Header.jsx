import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between px-24 items-center' >
        <img className='w-32 ' src="/assets/netflix.png" alt="" />
        <div className="flex gap-5 ">
            <select className='text-white bg-red-600 rounded-lg px-1' name="" id="">
              <option className='bg-white text-black' value="english">english</option>
              <option  className='bg-white text-black'   value="malayalam">malayalam</option>
              <option className='bg-white text-black' value="hindi">hindi</option>

            </select>
            <Link to={"/signup"} className='bg-red-600 text-white text-lg p-2 hover:underline  w-24 rounded-lg' >sign up</Link>

        </div>
        
    </div>
  )
}

export default Header 







