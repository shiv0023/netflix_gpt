import { useDispatch } from 'react-redux';
import { AddMovies } from '../Utils/MoviesSlices';
import { useEffect } from 'react';
import { options } from '../Utils/Constant';

import React from 'react'
const UseMoveApi = () => {
    const dispatch = useDispatch();

    const GetApiMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
            const Mydata = await data.json(); // added parentheses here
            console.log(Mydata.results);
            dispatch(AddMovies(Mydata.results))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        GetApiMovies();
    }, []);
    return (
        <div>UseMoveApi</div>
    )
}

export default UseMoveApi