import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import InputText from './src/components/InputText';

const App = () => {

  return (
    <View>
      <Title text="Welcome"/>
      <Text style={style.text}>Username</Text>
      <InputText placeholder='Masukkan username anda' />
      <Text style={style.text}>Password</Text>
      <InputText placeholder='Masukkan password anda' />
      <View style={{flexDirection:'row', marginTop: 30}}></View>
      <TouchableOpacity style={style.button}>
        <Text style={style.button}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft:20,
    color: 'black',
  },
  button: {
    backgroundColor: '#F27108',
    color: 'white',
    padding: 6,
    textAlign: 'center',
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold',
  }
})

export default App;
