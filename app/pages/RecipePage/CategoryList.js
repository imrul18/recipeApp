import React from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
import backgroundimage from './../../assets/images/backgroundimage.jpeg'

import totalrecipe from "../../assets/data/data";
const data = totalrecipe;

const CategoryList = ({ navigation }) => {

    const subcategory = (item) => {
        return (
            <TouchableOpacity style={styles.subcategory} onPress={() => navigation.navigate('recipelist', { data: item.recipelist })}>
                <Text style={styles.subcategorytext}>{item.subcategoryName}</Text>
            </TouchableOpacity>
        )

    }

    const category = ({ item }) => (
        <View style={styles.flatlistContainer}>
            <View style={styles.category}>
                <Text style={styles.categorytxt}>{item.categoryName} </Text>
            </View>
            {item.subcategory.map(element => {
                return subcategory(element)
            })}
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.backgroundimage}>

                <FlatList
                    style={styles.FlatList}
                    data={data}
                    renderItem={category}
                    keyExtractor={item => item.id}
                />

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimage: {
        flex: 1,
    },
    flatlistContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 100,
        margin: 20,
        borderRadius: 50,
    },
    category: {
        backgroundColor: '#178C9E',
        width: windowWidth * .9,
        height: 50,
        opacity: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    categorytxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    },
    subcategory: {
        backgroundColor: '#43A1B0',
        width: windowWidth * .7,
        height: 50,
        opacity: .8,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    subcategorytext: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    }
})
export default CategoryList