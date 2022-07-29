import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentIndex: 0
};

let carouselSlice = createSlice({
    name: 'carousel',
    initialState: initialState,
    reducers: {
        next: (state, action) => {
            state.currentIndex = state.currentIndex += action.payload
        },
        prev: (state, action) => {
            state.currentIndex = state.currentIndex += action.payload
        }
    }
});

export const { next, prev } = carouselSlice.actions;
export default carouselSlice.reducer;