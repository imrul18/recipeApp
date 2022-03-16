import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from "react-redux"
import Store from "./app/Redux/Store"


import SelectionPage from "./app/pages/SelectionPage";
import FavouritePage from "./app/pages/FavouritePage";
import RecipePage from "./app/pages/RecipePage";

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='home'
        >
          <Stack.Screen name="home" component={SelectionPage} />
          <Stack.Screen name="recipepage" component={RecipePage} />
          <Stack.Screen name="favourite" component={FavouritePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App