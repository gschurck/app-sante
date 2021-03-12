import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Onboard from "../Onboarding/Onboard";

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const styles = StyleSheet.create({
    container: {

        flex : 1,
        justifyContent:"center",
        alignItems : "center",
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const Tab = createMaterialTopTabNavigator();


class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}


export default Home;
