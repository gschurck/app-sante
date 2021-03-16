import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Title from "../../assets/images/Title";
import styles from "./Style";

class HeaderDesign extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Title style={styles.title}/>
            </View>
        );
    }
}

export default HeaderDesign;
