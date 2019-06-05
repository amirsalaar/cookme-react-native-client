import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


export default function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <Text style={styles.brandTitle}>CookMe</Text>
      <Text style={styles.slogan}>Food from anyone to everyone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#00aa88',
  },
  brandTitle: {
    fontSize: 50,
    // fontFamily: 'lato',
    color: 'black',
    fontWeight: '500'
  },
  slogan: {
    fontSize: 20,
  }
})
