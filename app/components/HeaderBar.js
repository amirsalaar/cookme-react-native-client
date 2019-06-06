import React from 'react';
import { Header, Image } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

export default function HeaderBar() {
  return (
    <Header
      placement="center"
      leftComponent={
        <FontAwesomeIcon
          icon={faBars}
          size={20}
          style={{ color: 'white', marginLeft: 10 }}
        />
      }
      centerComponent={
        <Image
          resizeMode='cover'
          style={{ width: 60, height: 60, alignSelf: 'center', }}
          source={require('../assets/images/logo.png')}
        />
      }
      rightComponent={
        <FontAwesomeIcon
          icon={faShoppingBag}
          size={20}
          style={{ color: 'white', marginRight: 10 }}
        />
      }
      backgroundColor='#00aa88'
    />
  )
}
