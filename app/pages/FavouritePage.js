import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import RecipeList from "./RecipePage/RecipeList";
import Recipe from "./RecipePage/Recipe";

import { useSelector, useDispatch } from "react-redux"

const Stack = createStackNavigator();

const FavouritePage = () => {

    const { cartArray } = useSelector(state => state.favourite)
    const data = [cartArray]

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='recipelist'
        >
            <Stack.Screen name="recipelist" component={RecipeList} initialParams={data} />
            <Stack.Screen name="recipe" component={Recipe} />
        </Stack.Navigator>
    )
}

export default FavouritePage