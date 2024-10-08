
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken : null,
    refreshToken: null,

}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    // reducers chua  tat ca cac action 
    reducers:{
        // login la 1 action va RTK tu hieu 
        login: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        logout: () => {
            return initialState;
            
        }

    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;