import React from 'react';
import { Badge } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';

export default function FoodIngredients(props) {
  const { ingredients } = props;
  return (
    <View style={styles.container}>
      {ingredients.map(ingredient => {
        return (
          <View key={ingredient.id} style={styles.items}>
            <Text style={styles.textStyle}>{ingredient.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  items: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
    padding: 4,
    marginVertical: 3,
    marginRight: 5,
    marginLeft: 0,
  },
  textStyle: { color: 'teal' }
})
