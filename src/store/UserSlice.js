import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: User,
    initialState: {
        token: null
    },
    reducers: {
        login: (state, action) => {
            token = action.payload
        },
        logout: (state, action) => {
            token = null;
        }
    }
})

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;