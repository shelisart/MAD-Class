import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import Shell from './assets/Shel.jpg';
import Title from './src/components/Title';
import InputName from './src/components/InputName';

const App = () => {
  return (
    <View>
      <Title text="This is MAD Class"/>
      <ScrollView>
      <InputName placeholder="Masukkan nama lengkap anda"/>
        <View style={{flexDirection:'column', marginTop:50}}>
          <Text style={{fontSize:20, fontWeight: 'bold', color: '#8fc9ae', marginBottom:20}}>Main Colors</Text>
          <View style={{width:1000, height:100, backgroundColor:'#8fc9ae'}} />
          <View style={{width:1000, height:100, backgroundColor:'#548e87'}} />
          <View style={{width:1000, height:100, backgroundColor:'#385b66'}} />
        </View>
        <TextInput
          placeholder="Masukkan kode warna favorite anda"
          style={style.inputColor}
        />
        <Button
          title="Submit"
          color={'#385b66'}
          onPress={() => Alert.alert('Warna Tersimpan!')}
        />
        <Text style={{fontSize:20, fontWeight: 'bold', color: '#8fc9ae', marginTop:30}}>Test Image</Text>
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={Shell} style={{marginLeft:7, marginTop:5, width:200, height: 200}} />
          <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{marginTop:5, width:200, height: 200, marginBottom:150}} />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  inputColor: {
    borderColor: '#bddaa5',
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
  },
});
export default App;
