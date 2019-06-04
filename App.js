import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './app/components/HeaderBar';
import SignInScreen from './app/components/SignInScreen';
import FoodIndexPage from './app/components/FoodIndexPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        {/* <SignInScreen /> */}
        <FoodIndexPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
