import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import CategoryList from "./RecipePage/CategoryList";
import RecipeList from "./RecipePage/RecipeList";

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
        </Stack.Navigator>
    )
}

export default RecipePage