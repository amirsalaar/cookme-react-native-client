import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Food from '../services/food';
import FoodItem from './FoodItem';

export default class FoodShowScreen extends PureComponent {
  state = {
    food: null,
    cook: null,
    loading: true,
  };

  componentDidMount = () => {
    this.fetchFood();
  };

  fetchFood = () => {
    const id = this.props.navigation.getParam('foodId', 'NO-ID');
    Food.one(id)
      .then(food => {
        this.setState({
          food,
          cook: food.cook,
          loading: false
        })
      })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    const { food } = this.state;
    if (!food) {
      return (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator
            animating
            size={50}
            color="teal"
            hidesWhenStopped
            style={styles.activityIndicator}
          />
        </View>
      )
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {food.name}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: food.pictures[0].url }}
        />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },  
  loaderWrapper: {
    display: 'flex',
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  activityIndicator: {
    flex: 2,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: { fontSize: 25, fontWeight: 'bold' },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    marginVertical: 10,
    
  },
})
