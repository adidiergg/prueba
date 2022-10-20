import React, { Component } from 'react';
import { View, Text, Button ,StyleSheet } from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={[styles.baseText,{fontSize:18}]}> Bienvenido <Text style={styles.innerText}> {this.props.route.params.nombre} </Text></Text>
        <Text style={[styles.baseText,{fontSize:18}]}> Codigo:  <Text style={styles.innerText}>{this.props.route.params.codigo}</Text></Text>
        <View style={styles.btn}>
        <Button  title='Altas' onPress={() => this.props.navigation.navigate("altas")}> </Button>
        </View>
        <Button style={styles.btn} title='Bajas' onPress={() => this.props.navigation.navigate("bajas") }> </Button>
        
        <Button style={styles.btn} title='Cambios'> </Button>
        <Button style={styles.btn} title='Listas' onPress={() => this.props.navigation.navigate("pantalla2",{nombre:this.props.route.params.nombre,codigo:this.props.route.params.codigo})}> </Button>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  container:{
    padding: 10,
    marginBottom:50,
  },
  item:{
    borderWidth: 1,
    borderRadius:2,
    margin:5
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    fontWeight:'normal'
  },

  
  
});