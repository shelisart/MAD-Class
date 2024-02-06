import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';

const InputName = ({placeholder}) =>{
    return (
        <View>
        <TextInput
            placeholder={placeholder}
            style={style.inputName}
            />
        <Button
            title="Save"
            color={'#385b66'}
            onPress={() => Alert.alert('Nama Tersimpan!')}
            />
    </View>
    )
};

const style = StyleSheet.create({
    inputName: {
        borderColor: '#bddaa5',
        borderWidth: 2,
        margin: 15,
        borderRadius: 15,
        padding: 10,
}
});
export default InputName;