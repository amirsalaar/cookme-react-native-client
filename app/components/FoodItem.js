import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'


export default function FoodItem(props) {
  const { name, price, description, pictures } = props.food;
  return (
    <Card
      title={name}
      image={{ uri: pictures[0].url }}
      titleStyle={{ fontSize: 24, }}
    >
      <Text style={{ marginBottom: 10 }}>
        {description}
      </Text>
      <Divider style={{ backgroundColor: 'black', marginVertical: 10 }} />
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faDollarSign}
          size={15}
          style={{ color: 'teal' }}
        />
        <Text style={{ color: 'teal' }}>
          {price}
        </Text>
      </View>
    </Card>
  )
}
