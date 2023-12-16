import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        RemoveUser: (state, action) => {
            return null
        }


    }
})
export const { addUser, RemoveUser } = UserSlice.actions
export default UserSlice.reducer