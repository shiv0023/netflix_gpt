import React, { useEffect } from 'react';
import Header from './Header';
import UseMoveApi from '../hooks/UseMoveApi';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  
    UseMoveApi();

    return (
        <>
            <div className='text-lg mt-22'>Sign Out</div>
<MainContainer  />
<SecondaryContainer/>

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
