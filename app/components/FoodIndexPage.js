import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Food } from '../services/food';

export default class FoodIndexPage extends Component {
  state = {
    foods: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchFoods();
  }

  fetchFoods = () => {
    Food.all().then(foods => {
      this.setState({
        foods, loading: false
      })
    })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    return (
      <ScrollView>

      </ScrollView>
    )
  }
}

