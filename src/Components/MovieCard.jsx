import React from 'react'
import { CDN_url } from '../Utils/Constant';

const MovieCard = ({path}) => {
    // const {poster_path}=path
    // console.log(path)
  return (
    <div className='w-48 pr-4'>
        <img className='' src={CDN_url+path} alt='card'/>
    </div>
  )
}

export default MovieCard