import {StatusBar} from 'expo-status-bar';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Onboard from "./components/OnboardComponents/Onboard";

export default function App() {
    return (
        <View style={styles.container}>
            <Onboard/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
