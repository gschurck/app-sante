import React, {Component} from 'react';
import {View, Text} from "react-native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import styles from "./Style";

const Tab = createMaterialTopTabNavigator();

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    hello
                </Text>
            </View>
        )
    }
}


export default Home;
