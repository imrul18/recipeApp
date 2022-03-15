import React from "react";
import { createSlice } from "@reduxjs/toolkit"

export const Favourite = createSlice({
    name: "favourite",

    initialState: {
        cartArray: [],
    },

    reducers: {
        addingRecipe: (state, action) => {
            const { payload } = action
            state.cartArray = payload
        },
        addingRecipefromlocal: (state, action) => {
            const { payload } = action
            state.cartArray = payload
        },
    }
})

export const { addingRecipe } = Favourite.actions

export default Favourite.reducer