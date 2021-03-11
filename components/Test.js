import React from 'react'
import {View, Text, Button} from 'react-native'
import Home from '../screens/Login/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();


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
