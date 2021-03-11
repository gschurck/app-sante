import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

//import styles from "./Style";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>Hello , {this.props.text}</Text>
                <Image style={styles.logo} source={require('../../assets/images/doctor.png')} />
            </View>
        );
    }
}


export default Home;
