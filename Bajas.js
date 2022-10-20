import React, { Component, useState } from 'react';
import { View, Text, Button ,Alert ,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:null,
        open:false,
        items: [],

    };
    this.setValue = this.setValue.bind(this)
    this.setItems =this.setItems.bind(this)
    this.setOpen = this.setOpen.bind(this)
  }

  fetchCodigos(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
          console.log(xhttp.responseText);
          var dataServer = JSON.parse(xhttp.responseText);
          //_this.setItems(dataServer);
          _this.setState({items:dataServer});
        }
    };
    xhttp.open("GET", "https://imnotame.000webhostapp.com/Codigos.php", true);
    xhttp.send();
  }

  setOpen(open){
    this.setState({
      open
    });
  }

  setValue(callback){
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback){
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  componentDidMount(){
    this.fetchCodigos();
  }

  
  

  render() {
    

    const { open, value, items } = this.state;

    const Bajas =() => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            
            response = xhttp.responseText;
                if(response==='1'){
                  Alert.alert("Ok","Se elimino usuario correctamente");
                }else{
                  Alert.alert("Error","No se pudo eliminar");
                }
            _this.fetchCodigos();
          }
      };
      xhttp.open("GET", "https://imnotame.000webhostapp.com/Bajas.php?codigo="+_this.state.value, true);
      xhttp.send();
    };

    return (
      <View style={styles.container}>
        <Text> Seleccionar usuario que desea eliminar: </Text>
            <DropDownPicker style={styles.select} open={open} 
                value={value}
                items={items} 
                setOpen={this.setOpen}  
                setValue={this.setValue}
                setItems={this.setValue}  
                
              
            />
            <Button style={styles.btn} title='Eliminar' onPress={Bajas}></Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  select:{
    marginVertical:10,
  },
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