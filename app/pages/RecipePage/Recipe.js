import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from "./Recipe/Product";
import Process from "./Recipe/Process";
import { addingRecipe, removingRecipe } from "../../Redux/Favourite/Favourite";

const Tab = createBottomTabNavigator();

const Recipe = ({ route }) => {
    const [favIcon, setFevIcon] = useState('heart-outline')

    const dispatch = useDispatch()

    const data = route.params.data

    const { cartArray } = useSelector(state => state.favourite)

    useEffect(() => {
        cartArray.forEach(element => {
            if (element.recipe_id === data.recipe_id) {
                setFevIcon('heart')
            }
        });
    }, [cartArray])


    const addToFav = async (data) => {
        if (favIcon == 'heart-outline') {
            dispatch(addingRecipe(data))
            setFevIcon('heart')
        }
        else{
            dispatch(removingRecipe(data))
            setFevIcon('heart-outline')
        }
    }

    return (
        <>
            <View style={styles.imagetag}>
                <ImageBackground source={data.recipe_img} style={styles.image}>
                    <TouchableOpacity onPress={() => addToFav(data)}>
                        <Icon name={favIcon} size={60} color="red" />
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