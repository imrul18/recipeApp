import React from 'react'
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native'


import backgroundimage from './../../../assets/images/backgroundimage.jpeg'

const Product = (item) => {
    const data = item.data.recipe_product
    return (
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>

            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item, index) => {
                    return (
                        <View style={styles.text}>
                            <Text style={styles.textnumber}>{index + 1}</Text>
                            <Text style={styles.textdata}>{item[0]}</Text>
                            <Text style={styles.textdataquantity}>{item[1]}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundimage: {
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 100,
        marginTop: 30,
        marginBottom: 30
    },
    text: {
        width: 180,
        height: 50,
        backgroundColor: '#178C9E',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        opacity: .9,
        flexDirection: 'row'
    },
    textnumber: {
        flex: 1,
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
        marginLeft: 15
    },
    textdata: {
        flex: 3,
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    textdataquantity: {
        flex: 2,
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }

})

export default Product