//importacion de los objetos


import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image, TextInput, Button} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaran variables
        codigo:"",
        nip:"",
    };
  }



  render() {
      
      const navigation =  this.props.navigation;
      //programacion de objetos en js

      const btnClick = () =>{
        //SENTENCIA PARA IR A LA SIGUIENTE VENTANA
        //this.props.navigation.navigate("pantalla2");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              const autentificacion = xhttp.responseText;

              if ( autentificacion==='0'){
                alert('No es un usuario reconocido');
              }else{
                navigation.navigate("pantalla2");
              }

              
            }
        };

        xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.codigo+"&nip="+this.state.nip, true);
        xhttp.send();

        
      }

    return (
      <View>
          
        <Text style={styles.textoudeg}  > UdeG </Text>
        
        <Image style={styles.logoudg} source={require("./Imagenes/logoudg.png")}></Image>
        
        <TextInput style={styles.input}
        placeholder="Codigo"
        onChangeText={codigo => this.setState({codigo})}
        ></TextInput>

        <TextInput style={styles.input} secureTextEntry={true}
        placeholder="NIP"
        onChangeText={nip => this.setState({nip})}
        ></TextInput>

      <View  style={styles.btn} >
      <Button title="Entrar" onPress={btnClick}></Button>
      </View>

        

      </View>
    );
  }
}

//declaracion de los estilos de los objetos
const styles = StyleSheet.create({
    
    btn:{
      width:100,
      height:80,
      marginTop:20,
      margin:150
    },
    textoudeg:{
        fontSize:30,
        color:"orange",
        textAlign:"center",
    },
    logoudg:{
        height:200,
        width:100,
        marginLeft:150,
        resizeMode:"contain",
        
        
    },
    input:{
        borderWidth:2,
        fontSize:30,
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        
    },
  });

  /*
  Tarea: AJUSTAR EL CODIGO DEL BOTON PARA QUE CUANDO PONGAN LAS CREDENCIALES 
  CORRECTAS VAYA A PANTALLAS B , SI NO SON LAS CRENDENCIALES CORRECTAS SALE UNA VENTANA DE ALERT DICIENDO QUE NO ES UN USUARIO RECONOCIDO
  QUITAR A LA PANTALLAR B EL TARBAR , PARA EVITAR QUE REGRESE.
  
  */ 