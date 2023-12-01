import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovie: [],
        trailerVideo: [] // Assuming NowPlayingMovie is an array, adjust as needed
    },
    reducers: {
        AddMovies: (state, action) => {
            state.NowPlayingMovie = action.payload;
        },
        AddTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload

        }
    }
});

export const { AddMovies,AddTrailerVideos } = MoviesSlice.actions;
export default MoviesSlice.reducer;
