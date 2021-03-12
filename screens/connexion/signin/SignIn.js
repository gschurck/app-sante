import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";

class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Se connecter
                </Text>
            </View>
        );
    }
}

export default SignIn;
