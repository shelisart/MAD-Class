import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';

const InputText = ({placeholder}) =>{
    return (
        <View>
        <TextInput
            placeholder={placeholder}
            style={style.inputText}
            />
    </View>
    )
};

const style = StyleSheet.create({
    inputText: {
        borderColor: 'grey',
        borderWidth: 2,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 2,
        marginBottom: 20,
        borderRadius: 10,
        padding: 13,
        alignItems: 'center',
}
});
export default InputText;