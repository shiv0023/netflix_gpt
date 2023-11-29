import React from 'react'
import Body from './Components/Body';
import Routing from './Routes/Routing';
import { Provider } from 'react-redux';
import AppStore from "./Utils/Appstore"
const App = () => {
  return (
    <>
    <Provider store={AppStore}>
    <Routing/>

    </Provider>

</>
  )
}

export default App;