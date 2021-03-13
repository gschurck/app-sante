import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },

    buttons: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    image: {

        width: '100%',
        height: '40%',
        resizeMode: 'cover',
    },
    text: {
        textTransform: 'uppercase',
        fontSize  : 22,


    },
    imageContainer: {
        flex: 1,
        marginTop:'10%',
        alignItems: 'center',
        width: '100%',

    }

});

export default styles;
