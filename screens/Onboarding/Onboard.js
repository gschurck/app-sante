import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import slides from "../../assets/slides";
import style from "./Style";

import {ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../src/variables/variables'
import Navigation from "../navigation/Navigation";

class Onboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false
        }
    }

    _renderNextButton = () => {
        return (
            <View style={style.buttonCircle}>
                <Icon
                    name="arrow-forward-outline"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <View style={style.buttonCircle}>
                <Icon
                    name="checkmark-outline"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    }
    _renderItem = ({item}) => {
        return (
            <View style={style.slide}>
                <ImageBackground
                    source={item.image}
                    style={style.image}
                />
                <Text style={style.title}>{item.title}</Text>
                <Text >{item.description}</Text>
            </View>
        )
    }
    _onDone = () => {
        this.setState({showRealApp: true});
    }


    render() {
        if (this.state.showRealApp) {
            return <Navigation/>
        } else {
            return (
                <AppIntroSlider
                    data={slides}
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    renderNextButton={this._renderNextButton}
                    renderDoneButton={this._renderDoneButton}
                    activeDotStyle={{backgroundColor: variables.mainAppColor}}
                />
            );
        }
    }
}



export default Onboard;


