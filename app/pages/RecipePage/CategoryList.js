import React from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
import backgroundimage from './../../assets/images/backgroundimage.jpeg'

import totalrecipe from "../../assets/data/data";


const data = totalrecipe;

const catagory = (data) => {
    return (
        <View style={styles.category}>
            <Text style={styles.categorytxt}>{data}</Text>
        </View>
    )
}
const subcatagory = (name, data, navigation) => {
    return (
        <TouchableOpacity style={styles.subcategory} onPress={() => navigation.navigate('recipelist', { data: data })}>
            <Text style={styles.subcategorytext}>{name}</Text>
        </TouchableOpacity>
    )
}
const CategoryList = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.backgroundimage}>
                <ScrollView>
                    <View style={styles.scroll}>
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    {catagory('ভাত')}
                    {subcatagory('polao', data[0], navigation)}
                    {subcatagory('vat', data[0], navigation)}
                    </View>
                </ScrollView>
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
    scroll: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 250,
        height: 100,
        margin: 20,
        borderRadius: 50,
    },
    category: {
        backgroundColor: '#178C9E',
        width: windowWidth*.9,
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
        width: windowWidth*.7,
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