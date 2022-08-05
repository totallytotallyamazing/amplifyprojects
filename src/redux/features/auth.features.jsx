import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Auth from '@aws-amplify/auth';

const initialState = {
    user: null,
    local: false
}

export const getAuthUser = createAsyncThunk(
    'user/getAuthUser',
    async () => {
        Auth.currentSession()
            .then((session) => {
                const {
                    idToken,
                    accessToken,
                } = session;
                // Define your user schema per your needs
                session = {
                    email: idToken.payload.email,
                    username: idToken.payload.preferred_username,
                    userId: idToken.payload.sub,
                    accessToken: accessToken.jwtToken,
                }
                localStorage.setItem('session', JSON.stringify(session));
            })
            .catch((err) => {
                // handle it
                if(err) {
                    console.log('user: ' + err);
                }   
            });
    }
);

export const removeAuthUser = createAsyncThunk(
    'user/removeAuthUser',
    async () => {
        localStorage.removeItem('session');
    }
);

let authSlice = createSlice({
    name: 'authUser',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getAuthUser.fulfilled, (state, action) => {
                action.payload = localStorage.getItem('session');
                state.user = action.payload;
                state.local = true;
        }).addCase(removeAuthUser.fulfilled, (state) => {
            state.user = null;
            state.local = false;
        })
    }
});

export default authSlice.reducer;