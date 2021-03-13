import React, {Component} from 'react';

import Connexion from "../connexion/Connexion";
import SignUp from "../connexion/signup/SignUp";
import {createStackNavigator,} from "@react-navigation/stack";
import SignIn from "../connexion/signin/SignIn";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import Navigation from "./Navigation";

const ConnexionStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
}


export class ConnexionTabs extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        return (
            <NavigationContainer
                theme={MyTheme}
            >
                <ConnexionStack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <ConnexionStack.Screen name={"Connexion"} component={Connexion}/>
                    <ConnexionStack.Screen name={"Navigation"} component={Navigation}/>
                    <ConnexionStack.Screen name={"SignUp"} component={SignUp}/>
                    <ConnexionStack.Screen name={"SignIn"} component={SignIn}/>
                </ConnexionStack.Navigator>
            </NavigationContainer>
        )
    }
}