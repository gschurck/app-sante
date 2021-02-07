import React from 'react';
import {Text, View,Image , useWindowDimensions} from 'react-native';
import styles from "./Style";

const OnBoardItem = ({item}) => {
    const  {width} = useWindowDimensions();
    return (
       <View style={[styles.container , {width}]}>
           <Image source={item.image} style={[styles.image , {width ,resizeMode : 'contain'}]} />
            <View styles={{flex : 0.5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style ={styles.description}>{item.description}</Text>
            </View>
       </View>
    );
};

export default OnBoardItem;
