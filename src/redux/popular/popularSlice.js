import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const popularSlice  = createSlice({
    name: 'popular-orders',
    initialState, 
    reducers: {
       setPopularItems: (state, action) => {
        state.items = action.payload
       }
    }
})

export const { setPopularItems } = popularSlice.actions

export default popularSlice.reducer