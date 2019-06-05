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
    color: 'black',
    fontWeight: '500',
    fontFamily: 'notoserif',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 15
  },
  slogan: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'notoserif',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 15
  }
})
