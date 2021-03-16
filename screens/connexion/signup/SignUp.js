import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";
import {Dimensions} from "react-native-web";
import HeaderDesign from "../../../components/headerDesign/HeaderDesign";
import Footer from "../../../components/footerDesign/Footer";

const {width} = Dimensions.get("window");


class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderDesign/>
                <View style={styles.content}>

                </View>

            </View>
        );
    }
}

export default SignUp;
