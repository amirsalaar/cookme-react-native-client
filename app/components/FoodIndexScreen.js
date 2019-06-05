import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import Food from '../services/food';
import FoodItem from './FoodItem';

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
    const { foods, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.container}>
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
      <ScrollView>
        {foods.map(food => (
          <FoodItem
            key={food.id}
            food={food}
          />
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70
  }
})
