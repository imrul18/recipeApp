import React,{useEffect} from "react";
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { addingRecipefromlocal } from "./../Redux/Favourite/Favourite";
import AsyncStorage from '@react-native-async-storage/async-storage';


import backgroundimage from './../assets/images/backgroundimage.jpeg'

const SelectionPage = ({ navigation }) => {  

  const dispatch = useDispatch()

  useEffect(()=>{
    const setlocal = async () => {
      try {
          const value = await AsyncStorage.getItem('@cartArray')
          if(value !== null){
            dispatch(addingRecipefromlocal(JSON.parse(value)))
          }
      } catch (error) {
          console.log(error)
      }
  }
  setlocal()      
  },[])

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.backgroundimage}>

        <TouchableOpacity onPress={() => navigation.navigate('recipepage')}>
          <View style={styles.recipe}>
            <Text style={styles.text}>রেসিপি</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('favourite')}>
          <View style={styles.recipe}>
            <Text style={styles.text}>পছন্দ</Text>
          </View>
        </TouchableOpacity>

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
  recipe: {
    backgroundColor: '#178C9E',
    width: 250,
    height: 60,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,

  }
})
export default SelectionPage