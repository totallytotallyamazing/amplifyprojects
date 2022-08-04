import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Auth from '@aws-amplify/auth';

const initialState = {
    user: null
}

export const getAuthUser = createAsyncThunk(
    'user/authUser',
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
                .catch((err) => {
                    // handle it
                    if(err) {
                        console.log('user: ' + err);
                    }
                });
                localStorage.setItem('session', JSON.stringify(session));
                // console.log('session: ' + JSON.stringify(session));
            });
    }
);

let authSlice = createSlice({
    name: 'authUser',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getAuthUser.pending, (state, action) => {
            state.user = localStorage.getItem('session');
        })
            // state.user = state.user += 1
            // state.user = state.user += action.payload
            // let authSession = null;
            // Auth.currentSession()
            // .then((session) => {
            //     const {
            //         idToken,
            //         accessToken,
            //     } = session;
            //     // Define your user schema per your needs
            //     const user = {
            //         email: idToken.payload.email,
            //         username: idToken.payload.preferred_username,
            //         userId: idToken.payload.sub,
            //         accessToken: accessToken.jwtToken,
            //     };
            //     state.user = user;
            //     // setUser(user);
            //     // console.log('session: ' + JSON.stringify(authSession));
            // })
            // .catch((err) => {
            //     // handle it
            //     if(err) {
            //         console.log('user: ' + err);
            //     }
                
            // });
            

    }
});

// export const { getAuthUser } = authSlice.actions;
export default authSlice.reducer;