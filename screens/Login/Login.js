import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

/*
export default function Login() {
    return (
        <View>
            <Text>Open up App.js to stgfgfgart working on your app!</Text>
                                <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
    );

}*/

class Login extends Component {
  render() {
    return (
        <View>
            <Text>Open up App.js to stgfgfgart working on your app!</Text>
                                <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
    );
  }
}

export default Login;