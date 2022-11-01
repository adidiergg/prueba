import React, { Component, useState } from 'react';
import { View, Text,TextInput,Image,TouchableOpacity
  ,Button ,Alert ,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:null,
        open:false,
        items: [],
        id:"",
        Codigo:"",
        Nombre:"",
        Tarea:"",
        Imagen:"",

    };
    this.setValue = this.setValue.bind(this)
    this.setItems =this.setItems.bind(this)
    this.setOpen = this.setOpen.bind(this)
  }



  searchUsuario(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log("https://imnotame.000webhostapp.com/Busqueda.php?codigo="+_this.state.value);
          var usuario = JSON.parse(xhttp.responseText);
          console.log(usuario[0].Nombre);
          _this.setState({id:usuario[0].Id});
          _this.setState({Codigo:usuario[0].Codigo});
          _this.setState({Nombre:usuario[0].Nombre});
          _this.setState({Tarea:usuario[0].Tarea});
          _this.setState({Imagen:usuario[0].Imagen});
          //_this.setState({datos:{id:usuario[0].Id,Codigo:usuario[0].Codigo,Nombre:usuario[0].Nombre,Tarea:usuario[0].Tarea,Imagen:usuario[0].Imagen}})
          //console.log(_this.state.datos)
          //console.log(_this.state.datos.items.id)
          //_this.setItems(dataServer);
          //_this.setState({items:dataServer});
        }
    };
    xhttp.open("GET", "https://imnotame.000webhostapp.com/Busqueda.php?codigo="+_this.state.value, true);
    xhttp.send();
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
    let _this = this
    this.setState(state => ({
      value: callback(state.value)
    }), _this.searchUsuario );
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
      
      if (this.state.value===null){
        Alert.alert("Campo vacío","Es necesario seleccionar un código");
        return;
      }

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
            _this.setState({value:null});
            _this.setState({id:''});
            _this.setState({Codigo:''});
            _this.setState({Nombre:''});
            _this.setState({Tarea:''});
            _this.setState({Imagen:''});
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

<Text style={styles.baseText}>Codigo: </Text>
        <TextInput value={this.state.Codigo}  editable={false} style={styles.input}  />

        <Text style={styles.baseText}>Nombre: </Text>
        <TextInput value={this.state.Nombre} editable={false} style={styles.input} />

        

        <Text style={styles.baseText}>Tarea: </Text>
        <TextInput value={this.state.Tarea}  editable={false} style={styles.input}  />


        <Text  style={styles.baseText}>Url imagen: </Text>
        <TextInput value={this.state.Imagen} editable={false}   style={styles.input}   />
        <Image style={styles.imagen} source={{uri:this.state.Imagen ? this.state.Imagen:null}}></Image>

        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={Bajas}>
          <Text style={styles.buttonText}>Bajas</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop:10,
    elevation: 8,
    backgroundColor: "#B12028",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
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