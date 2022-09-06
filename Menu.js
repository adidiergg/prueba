//archivo de conf de ventanas de navegacion
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import PANTALLAB from "./Pantallab"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LOGIN} />
        <Stack.Screen name="pantalla2" component={PANTALLAB} 
          options={{
            headerBackVisible:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;