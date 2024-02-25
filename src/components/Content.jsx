import React from 'react'

function Content() {
    return (
        <div className='text-white bg-black flex justify-between'>
            <div className='flex flex-col items-left' >
                <h1 className='font-bold text-5xl'>Heading 1</h1>
                <h1 className='text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only five centuries
                </h1>
            </div>
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
    )
}

export default Content
