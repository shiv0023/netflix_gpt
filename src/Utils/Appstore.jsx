import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "../Utils/MoviesSlices";

const mystore = configureStore({
    reducer: {
        User: userReducer,
        movies: moviesReducer,
    },
});

export default mystore;
