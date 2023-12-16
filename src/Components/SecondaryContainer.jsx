import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movie=useSelector((store)=>store.movies)
  console.log(movie,"hello")
  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-60 pl-12 ' >
      <MoviesList title="Now playing" Move={movie.NowPlayingMovie}/>
      <MoviesList title="Trending" Move={movie.NowPlayingMovie}/>
      <MoviesList title="Upcoming Movies" Move={movie.NowPlayingMovie}/>
      <MoviesList title="Popular" Move={movie.PopularMovies}/>
      <MoviesList title="Hollywood" Move={movie.NowPlayingMovie}/>
      </div>

    </div>
  )
}

export default SecondaryContainer