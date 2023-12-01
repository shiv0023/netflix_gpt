import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
    const Movies=useSelector((store)=>store.movies?.NowPlayingMovie)
    const MyMovies=Movies[0]
    if(!MyMovies)return;
    console.log(MyMovies)
    const {original_title,overview ,id}=MyMovies;
  return (
    <div>
<VideoTitle title={original_title} overview={overview}/>
<VideoBg movieid={id}/>

    </div>
  )
}

export default MainContainer