import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "../Utils/MoviesSlices";
import GptSearchReducer from "../Utils/GptSlice";
import ConfigSlice from "../Utils/ConfigSlice";
const mystore = configureStore({
    reducer: {
        User: userReducer,
        movies: moviesReducer,
        gpt:GptSearchReducer,
        config:ConfigSlice,

    },
});

export default mystore;
