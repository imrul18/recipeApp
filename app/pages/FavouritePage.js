import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import RecipeList from "./RecipePage/RecipeList";
import Recipe from "./RecipePage/Recipe";

const Stack = createStackNavigator();

const FavouritePage = () => {

    

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='recipelist'
        >
            <Stack.Screen name="recipelist" component={RecipeList}/>
            <Stack.Screen name="recipe" component={Recipe} />
        </Stack.Navigator>
    )
}

export default FavouritePage