import React from 'react'
import { useState } from 'react'
function Hero() {
  const [count, setCount] = useState(0);
  const [Color, setColor] = useState(false);
  return (
    <div >
      <div className='items-center text-2xl py-10 flex flex-col gap-5' >

        <h1 >Welcome Back to <span className={`${Color?"text-red-500":"text-white"}`} onClick={() => {setColor(!Color); setCount(count + 1)}}> Netflix {count}.0</span> </h1>

        <h1 className='text-center mb-20 text-5xl font-bold'>Unlimited movies,TV shows and more</h1>
        <video
          autoPlay
          loop
          muted
          className=" h-[140px] md:h-[300px] w-full rounded-xl"
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Hero
