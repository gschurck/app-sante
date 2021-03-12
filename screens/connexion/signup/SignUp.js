import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";

class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    S'inscrire
                </Text>
            </View>
        );
    }
}

export default SignUp;
