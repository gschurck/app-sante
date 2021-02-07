
import React ,{useState , useRef} from 'react';
import {Text, View ,FlatList ,Animated} from 'react-native';
import styles from "./Style";
import slides from "../../assets/slides";
import OnBoardItem from "./OnboardItem/OnBoardItem";

const Onboard = (props) => {

    return (
        <View style={styles.container}>
           <View style={{flex : 3}}>
            <FlatList
                data={slides}
                renderItem={({item}) => <OnBoardItem item={item}/>}
                horizontal
                showHorizontalScrollIndicator
                pagingEnabled
                bounces = {false}
                keyExtractor ={(item) =>item.id}
            />
           </View>
        </View>
    );
};

export default Onboard;
