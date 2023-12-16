import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
    name: 'gpt',
    initialState: {
        ShowGptSearch: false
    },
    reducers: {
        toggleSearchView: (state, action) => {
            state.ShowGptSearch = !state.ShowGptSearch
        }
    }
})
export const { toggleSearchView } = GptSearch.actions;
export default GptSearch.reducer;