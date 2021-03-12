import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from "./Style";
import ConnexionButtons from "../../components/buttons/connexion/ConnexionButtons";

import {Image} from "react-native";

class Connexion extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/meditation.png')}  style={styles.image} />
                </View>
                <View style={styles.buttons}>
                    <ConnexionButtons
                        title={"Crée un compte"}
                        nav={this.navigation}
                        type={'SignUp'}
                        goTo={"SignUp"}
                    />
                    <ConnexionButtons
                        title={"Se connecter"}
                        nav={this.navigation}
                        goTo={"SignIn"}
                    />
                </View>
            </>
        )
            ;
    }
}

export default Connexion;
