//importacion de los objetos


import React, { Component } from 'react';
import { View, Text ,TouchableOpacity ,StyleSheet,Image, TextInput, Button} from 'react-native';

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
                var recibe = xhttp.responseText;
                var datos = recibe.split(",");
                console.log(datos[2]);
                navigation.navigate("acciones",{nombre:datos[2],codigo:datos[1]});

              }

              
            }
        };

        xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.codigo+"&nip="+this.state.nip, true);
        xhttp.send();

        
      }

    return (
      <View>
        <View>
        <Text style={styles.textoudeg}  > UdeG </Text>
        
        <Image  style={styles.logoudg} source={require("./Imagenes/logoudg.png")}></Image>
        </View>
        <TextInput  style={styles.input}
        placeholder="Codigo"
        onChangeText={codigo => this.setState({codigo})}
        ></TextInput>

        <TextInput  style={styles.input} secureTextEntry={true}
        placeholder="NIP"
        onChangeText={nip => this.setState({nip})}
        ></TextInput>

      <View  style={styles.btn} >
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={btnClick}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      

        

      </View>
    );
  }
}

//declaracion de los estilos de los objetos
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
    
    btn:{
      //width:100,
      //height:150,
      marginTop:20,
      marginHorizontal:5,
      
      //margin:150
    },
    textoudeg:{
        fontSize:30,
        color:"orange",
        textAlign:"center",
    },
    logoudg:{
        height:250,
        width:150,
        
        //marginLeft:150,
        resizeMode:"contain",
        alignSelf:'center',
        
        
    },
    input:{
        borderWidth:2,
        fontSize:30,
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        borderColor: "gray",
        borderRadius: 10,
        
    },
  });

 

  /*
  Tarea: AJUSTAR EL CODIGO DEL BOTON PARA QUE CUANDO PONGAN LAS CREDENCIALES 
  CORRECTAS VAYA A PANTALLAS B , SI NO SON LAS CRENDENCIALES CORRECTAS SALE UNA VENTANA DE ALERT DICIENDO QUE NO ES UN USUARIO RECONOCIDO
  QUITAR A LA PANTALLAR B EL TARBAR , PARA EVITAR QUE REGRESE.
  
  */ 