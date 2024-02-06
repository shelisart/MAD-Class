import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View>
            <Text style={style.title}>{text}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8fc9ae',
    textAlign: 'center',
    margin: 17,
    },
});

export default Title;