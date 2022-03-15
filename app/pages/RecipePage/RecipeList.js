import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, CustomImage, FlatList } from 'react-native'

import backgroundimage from './../../assets/images/backgroundimage.jpeg'

const RecipeList = ({ route, navigation }) => { 
    const data = route.params?.data ? route.params.data : route.params[0]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('recipe', { data: item })}>
            <Image source={item.recipe_img} style={styles.image} />
            <Text style={styles.text}>{item.recipe_name} </Text>
                <Text style={styles.persontext}>{item?.recipe_person}</Text>
            
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundimage: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#40B8BC',
        margin: 5,
        opacity: 0.8,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        flex:3,
        margin: 5,
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'flex-start'
    },
    text: {
        flex:4,
        fontSize: 20,
        color: 'white',
        padding: 10,
    },
    person: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 10,
    },
    persontext: {
        flex: 2,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 10,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        width: 75,
        marginRight: 10
    },
})
export default RecipeList