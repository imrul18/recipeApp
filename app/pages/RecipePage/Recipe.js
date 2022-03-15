import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from "./Recipe/Product";
import Process from "./Recipe/Process";
import { addingRecipe } from "../../Redux/Favourite/Favourite";

const Tab = createBottomTabNavigator();

const Recipe = ({ route }) => {

    const dispatch = useDispatch()

    const data = route.params.data

    const addToFav = async (data) => {
        var value= [];
        try {
            const avalue = await AsyncStorage.getItem('cartArray')
            if(avalue !== null){
                value = JSON.parse(avalue);
            }
        } catch (e) {
            console.log(e)
        }
        value.push(data)
        dispatch(addingRecipe(value))
        try {
            await AsyncStorage.setItem('cartArray', JSON.stringify(value))
            console.log('set')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <View style={styles.imagetag}>
                <ImageBackground source={data.recipe_img} style={styles.image}>
                    <TouchableOpacity onPress={() => addToFav(data)}>
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