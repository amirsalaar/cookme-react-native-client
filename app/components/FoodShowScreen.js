import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Divider,
  Badge,
  Button,
} from 'react-native-elements';
import Food from '../services/food';
import FoodItem from './FoodItem';
import FoodIngredients from './FoodIngredients';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {food.name}
          </Text>
          <View>
            <Image
              style={styles.image}
              source={{ uri: food.pictures[0].url }}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {food.description}
            </Text>
            <Divider style={styles.divider} />
            <View>
              <Text style={styles.ingredientTitle}>Ingredients</Text>
              <FoodIngredients ingredients={food.ingredients} />
            </View>
            <Divider style={styles.divider} />
            <Button
              icon={
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={20}
                  style={{ color: 'white', marginRight: 10 }}
                />}
              title="Add to Cart"
              buttonStyle={{backgroundColor: '#20ba45'}}
            />

          </View>
        </View >
      </ScrollView>
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
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    marginVertical: 10,
  },
  title: { fontSize: 25, fontWeight: 'bold' },
  descriptionContainer: { padding: 15, },
  description: { fontSize: 15, lineHeight: 20, color: '#383838', },
  divider: { backgroundColor: 'grey', marginVertical: 15 },
  ingredientTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 }

})
