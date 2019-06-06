import React from 'react';
import { Header, Image } from 'react-native-elements';

export default function HeaderBar() {
  return (
    <Header
      placement="center"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={
        <Image
          resizeMode='cover'
          style={{ width: 60, height: 60, alignSelf: 'center', }}
          source={require('../assets/images/logo.png')}
        />
      }
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor='#00aa88'
    />
  )
}
