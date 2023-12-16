import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, Move }) => {
    console.log(Move, "nbh")
    return (
        <div className='p-2 '>
            <h1 className=' text-3xl font-bold bg-black w-[200px]  text-center text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex     '>
                    {Move.map((data) =>
                        <MovieCard key={data.id} path={data.poster_path} />
                     


                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviesList