import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";
import ConnexionButtons from "../../components/buttons/connexion/ConnexionButtons";

import {Image} from "react-native";
import Title from "../../assets/images/Title";

class Connexion extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/doctor.png')}/>
                    <Title/>
                </View>
                <View style={styles.buttons}>
                    <ConnexionButtons
                        title={'Créer un compte'}
                        type={'SignUp'}
                        nav={this.navigation}
                        goTo={'SignUp'}
                    />
                    <ConnexionButtons
                        title={'Se connecter'}
                        type={'SignIn'}
                        nav={this.navigation}
                        goTo={'SignIn'}
                    />

                </View>
            </View>
        )

    }
}

export default Connexion;
