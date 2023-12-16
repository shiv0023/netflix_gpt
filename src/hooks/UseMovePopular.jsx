import { useDispatch } from 'react-redux';
import { AddMoviesPopular } from '../Utils/MoviesSlices';
import { useEffect } from 'react';
import { options } from '../Utils/Constant';

import React from 'react'
const UseMovePopular = () => {
    const dispatch = useDispatch();

    const GetApiMoviesPopular = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
            const Mydata = await data.json(); // added parentheses here
            console.log(Mydata.results);
            dispatch(AddMoviesPopular(Mydata.results))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        GetApiMoviesPopular();
    }, []);
    return (
        <div>UseMoveApi</div>
    )
}

export default UseMovePopular