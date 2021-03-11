import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>Hello , {this.props.text}</Text>
            </View>
        );
    }
}


export default Home;
