import React from 'react'

const BrowserData = ({mydata}) => {
    const {original_title,poster_path}=mydata;
  return (
    <div className='border w-[300px] h-[200px] '>
        <p>
       {original_title} </p>
       <img src={poster_path} alt='users'/>
        </div>
  )
}

export default BrowserData