import React from 'react'
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native'


import backgroundimage from './../../../assets/images/backgroundimage.jpeg'

const Process = (item) => {
    const data = item.data.recipe_process
    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.text}>{data}{data}{data}{data}</Text>
            </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundimage: {
        flex: 1,
    },
    container: {
        margin: 20,
        backgroundColor: '#178C9E',
        borderRadius: 10,
        opacity: .95
    },
    text: {
        color: 'white',
        fontSize: 16,
        margin: 20,
        textAlign: 'justify'
    }
})

export default Process