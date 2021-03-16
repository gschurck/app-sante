import React, {Component} from 'react';
import {Text, View ,Button ,Pressable} from 'react-native';
import styles from "./Style";

import variables from "../../../src/variables/variables";






class ConnexionButtons extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.nav;
        this.backgroundColor = this.props.type === 'SignUp' ? 'white' : variables.mainAppGreenColor;
        this.color = this.props.type ==='SignUp'? 'black' : 'white';
    }
    render() {

        return (
            <View style={styles.container}>
                <Pressable
                    style={[styles.button , {backgroundColor : this.backgroundColor }]}
                    onPress={()=>this.navigation.navigate(this.props.goTo)}
                >
                    <Text style={[styles.text , {color : this.color}]} >{this.props.title}</Text>
                </Pressable>
            </View>
        );

    }

}

export default ConnexionButtons;
