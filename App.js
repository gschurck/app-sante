import {StatusBar} from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Test from './components/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login/Login';
import Home from './screens/Login/Home';


const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home">        
      <Stack.Screen 
        name="Home" 
        component={Home}
      options={{ title: 'Home' }}/>
    <Stack.Screen 
        name="Login" 
        component={Login}
      options={{ title: 'Login' }}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  );

}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
