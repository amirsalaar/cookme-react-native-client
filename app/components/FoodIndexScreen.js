import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Food from '../services/food';

export default class FoodIndexScreen extends Component {
  state = {
    foods: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchFoods();
  }

  fetchFoods = () => {
    Food.all().then(foods => {
      return (
        this.setState({
          foods, loading: false
        })
      )
    })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    const { foods } = this.state;
    return (
      <ScrollView>
        {foods.map(food => (
          <View style={{ color: 'black' }}>
            <Text>
            {food.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    )
  }
}

