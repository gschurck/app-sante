import React from 'react'
import {View, Text, Button} from 'react-native'
import Home from '../screens/Login/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

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
                           pressColor: 'green',
                           inactiveTintColor: 'gray',
                           showIcon: true,
                           showLabel: false
                       }}
                       tabBarPosition='bottom'
        >
            <Tab.Screen name="Home" component={Home}/>

        </Tab.Navigator>
    </NavigationContainer>
);

export default function Test({navigation}) {
    return (
        <View>
            <Text>ouidfdfdf</Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"/>
        </View>
    )
}
