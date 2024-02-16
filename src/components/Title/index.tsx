import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={style.title}>{text}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
    marginBottom: 30,
    },
});

export default Title;