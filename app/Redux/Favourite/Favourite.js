import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';



export const Favourite = createSlice({
    name: "favourite",

    initialState: {
        cartArray: [],
    },

    reducers: {
        removingRecipe: (state, action) => {
            const { payload } = action
            const carry = state.cartArray.filter(element=>element.recipe_id !== payload.recipe_id)
            state.cartArray = carry
            const setlocal = async (data) => {
                try {
                    await AsyncStorage.setItem('@cartArray', JSON.stringify(data))
                } catch (error) {
                    console.log(error)
                }
            }
            setlocal(state.cartArray)
        },
        addingRecipe: (state, action) => {
            const { payload } = action
            state.cartArray = [...state.cartArray,payload]
            const setlocal = async (data) => {
                try {
                    await AsyncStorage.setItem('@cartArray', JSON.stringify(data))
                } catch (error) {
                    console.log(error)
                }
            }
            setlocal(state.cartArray)
        },
        addingRecipefromlocal: (state, action) => {
            const { payload } = action
            state.cartArray = payload

        },
    }
})

export const { addingRecipe, addingRecipefromlocal, removingRecipe } = Favourite.actions

export default Favourite.reducer