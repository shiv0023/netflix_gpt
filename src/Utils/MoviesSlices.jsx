import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovie: [],
        PopularMovies: [],
        trailerVideo: [] // Assuming NowPlayingMovie is an array, adjust as needed
    },
    reducers: {
        AddMovies: (state, action) => {
            state.NowPlayingMovie = action.payload;
        },
        AddMoviesPopular: (state, action) => {
            state.PopularMovies = action.payload;
        },
        AddTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload

        }
    }
});

export const { AddMovies, AddTrailerVideos, AddMoviesPopular } = MoviesSlice.actions;
export default MoviesSlice.reducer;
