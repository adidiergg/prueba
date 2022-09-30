import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  

  render() {
    return (
      <View>
        <Text> Bienvenido {this.props.route.params.nombre}</Text>
      </View>
    );
  }
}
