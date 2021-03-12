import React, {Component} from 'react';

import Connexion from "../connexion/Connexion";
import SignUp from "../connexion/signup/SignUp";
import {createStackNavigator,} from "@react-navigation/stack";
import SignIn from "../connexion/signin/SignIn";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation";

const ConnexionStack = createStackNavigator();


export class ConnexionTabs extends Component {


    render() {
        return (
            <NavigationContainer>
                <ConnexionStack.Navigator
                    screenOptions={{
                        headerShown: false,

                    }}
                >
                    <ConnexionStack.Screen name={"Connexion"} component={Connexion}/>
                    <ConnexionStack.Screen name={"Navigation"} component={Navigation}/>
                    <ConnexionStack.Screen name={"SignUp"} component={SignUp}/>
                    <ConnexionStack.Screen  name={"SignIn"} component={SignIn}/>
                </ConnexionStack.Navigator>
            </NavigationContainer>
        )
    }
}