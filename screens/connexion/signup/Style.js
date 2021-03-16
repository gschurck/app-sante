import React from "react";
import {StyleSheet, Dimensions} from "react-native";
import variables from "../../../src/variables/variables";

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
    },
    content :{
        position : 'absolute',
        top:'30%',
        backgroundColor:'white',
        width: '100%',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        zIndex:1,
        height: '100%',

    }
});

export default styles;
