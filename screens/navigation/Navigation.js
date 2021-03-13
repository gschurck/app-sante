import React, {Component} from 'react';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Home from "../Home/Home";

const Tab = createMaterialTopTabNavigator();



export default class Navigation extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (route.name === 'Health') {
                            iconName = focused ? 'medkit' : 'medkit-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={20} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    pressColor: 'green',
                    inactiveTintColor: 'gray',
                    showIcon: true,
                    showLabel: false,
                }}
                tabBarPosition="bottom"
            >
                <Tab.Screen name={"Home"} component={Home}/>
            </Tab.Navigator>
        )
    }
}

