import  React from "react";
import {StyleSheet} from "react-native";
import variables from "../../../src/variables/variables";

const styles = StyleSheet.create({
    container : {
        width: '100%',
        padding:15,
        position: 'relative',
    },
    button :{
        padding: 14,
        position: 'relative',
        borderRadius:999,
        height:50,
        borderWidth : 1,
        borderColor : variables.mainAppColor,
        backgroundColor:"black",
    },
    text :{
        textAlign:'center'

    }
});

export default styles;
