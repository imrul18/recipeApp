import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import CategoryList from "./RecipePage/CategoryList";
import RecipeList from "./RecipePage/RecipeList";
import Recipe from "./RecipePage/Recipe";

const Stack = createStackNavigator();

const RecipePage = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='categorylist'
        >
            <Stack.Screen name="categorylist" component={CategoryList} />
            <Stack.Screen name="recipelist" component={RecipeList} />
            <Stack.Screen name="recipe" component={Recipe} />
        </Stack.Navigator>
    )
}

export default RecipePage