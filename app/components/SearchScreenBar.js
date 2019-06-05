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
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{ backgroundColor: '#fff', borderColor: 'white' }}
        inputContainerStyle={{ backgroundColor: '#d6d6d6' }}
      />
    )
  }
}
