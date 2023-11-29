import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
const Mystore=configureStore({
    reducer:{
        User:UserSlice,
    }

})
export default Mystore;