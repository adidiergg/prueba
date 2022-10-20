//archivo de conf de ventanas de navegacion
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import PANTALLAB from "./Pantallab"
import ACCIONES from "./Acciones"
import ALTAS from "./Altas"
import BAJAS from "./Bajas"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LOGIN} options={{ title: 'Iniciar sesión' }} />
        <Stack.Screen name="pantalla2" component={PANTALLAB} options={{ title: 'Listas' }} />
        <Stack.Screen name="acciones" component={ACCIONES} options={{title:'Acciones',
            headerBackVisible:false,
          }}/>
        <Stack.Screen name="altas" options={{ title: 'Altas' }} component={ALTAS} />
        <Stack.Screen name="bajas" options={{ title: 'Bajas' }} component={BAJAS}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;