import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./style";
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./screens/Home/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


//import Onboard from "./screens/Onboarding/Onboard";

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route}) => ({
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
                    pressColor:'green',
                    inactiveTintColor: 'gray',
                    showIcon:true,
                    showLabel:false
                }}
               tabBarPosition='bottom'
                >
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Health" component={SettingsScreen}/>
                    <Tab.Screen name="Settings" component={SettingsScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}


export default App;

