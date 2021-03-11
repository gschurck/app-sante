import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./style";
import Home from "./screens/Home/Home";

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
             <Home text={"frienD"}/>
            </View>
        );
    }
}






export default App;

