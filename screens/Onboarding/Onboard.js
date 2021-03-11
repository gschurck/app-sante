import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from "../Home/Style";

const Onboard = () => (
    <Onboarding
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/doctor.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            }
        ]}
    />
);



export default Onboard;


