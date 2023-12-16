import { createSlice } from "@reduxjs/toolkit";


const config = createSlice({
    name: "config",
    initialState: {
        lang: "english"
    },
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload
        }
    }

})
export const { changeLang } = config.actions
export default config.reducer
