import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute bg-gradient-to-r from-black aspect-video  '>
<h1 className='text-4xl text-white font-bold'>{title}</h1>
<p className='text-white   p-6 text-lg w-1/4 '>{overview}</p>
<div className='my-4 flex'>
    <button className='bg-red-500 text-white text-lg  px-10 bg-opacity-90 rounded-lg hover:bg-opacity-100'>Play</button>
    <button className='bg-red-500 text-black-200  text-lg p-4 px-10 mx-2 rounded-lg bg-opacity-80 text-white '>!More Info</button>

</div>

    </div>
  )
}

export default VideoTitle