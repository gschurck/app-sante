import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";

import HeaderDesign from "../../../components/headerDesign/HeaderDesign";
import ConnexionButtons from "../../../components/buttons/connexion/ConnexionButtons";

class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderDesign/>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcom</Text>
                    <ConnexionButtons
                        title={'go Home'}
                        nav={this.props.navigation}
                        goTo={'Navigation'}
                    />

                </View>
            </View>
        );
    }


}

export default SignUp;
