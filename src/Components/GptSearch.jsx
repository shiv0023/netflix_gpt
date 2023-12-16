import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { ImgUrl } from '../Utils/Constant';
const GptSearch = () => {
  return (
    <div>
      <img className=' absolute w-[100%] h-[100%] pt-5  ' alt='logo' src={ImgUrl} />
        <GptSearchBar/>
        <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearch