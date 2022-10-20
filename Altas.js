import { Text, View ,TextInput, Button ,Alert,StyleSheet } from 'react-native'
import React, { Component } from 'react'




export default class Altas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Nombre:"",
            Codigo:"",
            Tarea:"",
            Urli:"",
        };
    }

  render() {

    const Altas = () =>{
        let _this =this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
                response = xhttp.responseText;
                if(response==='1'){
                  Alert.alert("Ok","Se creo nuevo usuario correctamente");

                }else{
                  Alert.alert("Error","No se pudo crear nuevo usuario");
                }

                
            }
        };
        xhttp.open("GET", "https://imnotame.000webhostapp.com/Altas.php?nombre="+this.state.Nombre+"&codigo="+this.state.Codigo+"&tarea="+this.state.Tarea+"&urli="+this.state.Urli, true);
        xhttp.send();
    }

    return (
      <View style={styles.container}>

        

        <Text style={styles.baseText}>Nombre: </Text>
        <TextInput style={styles.input} onChangeText={(Nombre => this.setState({Nombre})) }/>

        <Text style={styles.baseText}>Codigo: </Text>
        <TextInput style={styles.input}  onChangeText={(Codigo => this.setState({Codigo})) }/>

        <Text style={styles.baseText}>Tarea: </Text>
        <TextInput style={styles.input}  onChangeText={(Tarea => this.setState({Tarea})) }/>


        <Text style={styles.baseText}>Url imagen: </Text>
        <TextInput style={styles.input}  onChangeText={(Urli => this.setState({Urli})) }  />

        <Button style={styles.btn} title="Altas" onPress={Altas}></Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  btn:{
    marginTop:10,
  },
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
    fontWeight: 'bold',
    fontSize:18,
  },
  innerText: {
    fontWeight:'normal'
  },
  input:{
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom:10,
  },
  
});