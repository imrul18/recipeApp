import React from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native'

import backgroundimage from './../assets/images/backgroundimage.jpeg'
import recipe from './../assets/images/recipe.jpg'
import favourite from './../assets/images/favourite.jpg'

const FavouritePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.backgroundimage}>

        <Text >Favourite</Text>

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
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: 250,
    height: 100,
    margin: 20,
    borderRadius: 50,

  }
})
export default FavouritePage