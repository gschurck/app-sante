import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from "./screens/Home/Home";


class App extends Component {
    render() {
        return (
            <View style ={styles.container}>
               <Text>Hello les gens</Text>
            </View>
        );
    }
}

import {StyleSheet} from "react-native-web";

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height:"100%",
        flex: 1,
        justifyContent :"center",
        alignItems : "center",
    }
});

export default App;

