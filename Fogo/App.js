import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TelaInicial from './TelaInicial';
import Login from './Login';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen name="Tela Inicial" options={{headerShown: false}}  component={TelaInicial} />
          <Stack.Screen name= "Login" options={{headerShown: false}}  component={Login}/>
          <Stack.Screen name= "Cadastro" options={{headerShown: false}}  component={Cadastro}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


