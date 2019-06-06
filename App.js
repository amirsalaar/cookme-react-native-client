import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import HeaderBar from './app/components/HeaderBar';
import SignInScreen from './app/components/SignInScreen';
import SearchScreenBar from './app/components/SearchScreenBar';
import FoodIndexScreen from './app/components/FoodIndexScreen';
import FoodItem from './app/components/FoodItem';
import SplashScreen from './app/components/SplashScreen';
import FoodShowScreen from './app/components/FoodShowScreen';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

export default class App extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ loading: false });
    };
  };

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  };

  render() {
    if (this.state.loading) {
      return <SplashScreen />
    };

    return (
      <View style={styles.container}>
        <HeaderBar />
        <SearchScreenBar />
        <AppContainer />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Foods: FoodIndexScreen,
    FoodItem: FoodShowScreen,
  },
  {
    initialRouteName: 'Foods'
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
