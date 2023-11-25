import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Components/Login';
import Browse from '../Components/Browse';
import Header from '../Components/Header';
import Body from '../Components/Body';
const Routing = () => {
 return(
<div>
    <Header/>
<Routes>
<Route path="/" element={<div><Body/></div>}/>
<Route path="/" element={<div><Login/></div>}/>

<Route path="/Browse" element={<div><Browse/></div>}/>

</Routes>

</div>



 )


}

export default Routing