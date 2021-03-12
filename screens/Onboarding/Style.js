import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection :"column",
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 22,
        width:"100%",
        zIndex : 5,
        textAlign:"center",
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
