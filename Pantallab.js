import React, { Component } from 'react';
import { View, Text,Image, FlatList, TouchableOpacity,StyleSheet } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos:[],
    };
  }

  componentDidMount(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //console.log(xhttp.responseText);
          console.log(xhttp.responseText);
          var dataServer = JSON.parse(xhttp.responseText);
          _this.setState({datos:dataServer});
        }
    };
    xhttp.open("GET", "https://imnotame.000webhostapp.com/mostrarDatos.php", true);
    xhttp.send();
  }

  

  render() {
    //diseñar la celda
    const celda = ({item})=>{
      console.log(item);
      return(
        <View>
          
         <TouchableOpacity style={styles.item}>
          <Text style={styles.baseText}>Nombre:  <Text style={styles.innerText}> {item.Nombre}</Text></Text>
          <Text style={styles.baseText}>Codigo:   <Text style={styles.innerText}> {item.Codigo}</Text></Text>
          <Text style={styles.baseText}>Tarea:    <Text style={styles.innerText}>  {item.Tarea}</Text></Text>

          </TouchableOpacity> 
        
        </View>
      );
    };
    /*
    
    
    */

    return (
      <View style={styles.container}>
        <Text style={[styles.baseText,{fontSize:18}]}> Bienvenido <Text style={styles.innerText}> {this.props.route.params.nombre} </Text></Text>
        <Text style={[styles.baseText,{fontSize:18}]}> Codigo:  <Text style={styles.innerText}>{this.props.route.params.codigo}</Text></Text>
        
        <FlatList data={this.state.datos}  renderItem={celda} keyExtractor={item => item.Id}  >


        </FlatList>
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
  }
  
});