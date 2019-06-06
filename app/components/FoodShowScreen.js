import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
    if (!this.state.food) {
      return (
        <View>
          <ActivityIndicator
            animating
            size={50}
            color="teal"
            hidesWhenStopped
          />
        </View>
      )
    };

    return (
      <View>
        <Text>
          {this.state.food.name}
        </Text>
      </View >
    )
  }
}
