import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./style";
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./screens/Home/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Onboard from "./screens/Onboarding/Onboard";


//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

class App extends Component {
    render() {
        return (
            <Onboard children={""}/>
        );
    }
}


export default App;

