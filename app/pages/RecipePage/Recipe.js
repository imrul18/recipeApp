import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from "./Recipe/Product";
import Process from "./Recipe/Process";

const Tab = createBottomTabNavigator();

const Recipe = ({ route }) => {

    const data = route.params.data

    const addToFav = data =>{
        console.log(data);
    }

    return (
        <>
            <View style={styles.imagetag}>
                <ImageBackground source={data.recipe_img} style={styles.image}>
                    <TouchableOpacity onPress={()=>addToFav(data)}>
                        <Icon name="heart" size={60} color="red" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabelPosition: "beside-icon",
                    tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 15
                    },
                    tabBarIconStyle: { display: "none" },
                    activeTintColor: 'black',
                    inactiveTintColor: 'red',
                }}
                initialRouteName='product'

            >
                <Tab.Screen name="product" children={() => <Product data={data} />} options={{ tabBarLabel: "উপকরণ" }} />
                <Tab.Screen name="process" children={() => <Process data={data} />} options={{ tabBarLabel: "রান্নার প্রণালী " }} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    imagetag: {
        margin: 10,
        padding: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height * .3,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {

    }
})
export default Recipe