import React, { useEffect } from 'react';
import Header from './Header';
import UseMoveApi from '../hooks/UseMoveApi';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GetApiMoviesPopular from "../hooks/UseMovePopular"
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
    const GptSerachView = useSelector((store)=>store.gpt.ShowGptSearch)
    UseMoveApi();
    GetApiMoviesPopular()
    return (
        <>
            <div className='text-lg mt-22'>Sign Out</div>
            {

                GptSerachView ? <GptSearch /> : <>
            <MainContainer />
                    <SecondaryContainer />


                </>
            }

            {/* {
                data.map((result) => {
                    return (
                        <div className='flex-wrap ' key={result.id}>
                            <BrowserData mydata={result} />
                        </div>


                    )
                })
            } */}
        </>
    );
};

export default Browse;
