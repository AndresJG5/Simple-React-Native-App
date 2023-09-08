import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './inicio'; // Importa tu pantalla de Inicio
import Login from './login'; // Importa tu pantalla de Login
import Registro from './registro';
import Acceso from './acceso';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Acceso" component={Acceso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
