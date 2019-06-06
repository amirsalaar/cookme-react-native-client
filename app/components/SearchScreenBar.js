import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchScreenBar extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        lightTheme
        placeholder="Kitchens near you..."
        onChangeText={this.updateSearch}
        value={search}
        round
        containerStyle={{ backgroundColor: '#fff', borderColor: 'white', borderWidth: 0 }}
        inputContainerStyle={{ backgroundColor: '#d6d6d6' }}
      />
    )
  }
}
