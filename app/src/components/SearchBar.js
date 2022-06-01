import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Map from '../components/Map';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [mapSearch, setMapSearch] = useState('Seoul');

  const navigation = useNavigation();

  async function setLocationData(value) {
    try {
      await AsyncStorage.setItem('location', value)
      navigation.navigate('InitialSettings')
    } catch (e) {
      console.log('user location 정보 저장 오류')
    }
  }

  return (
    <View style={styles.layout}>
      <View style={styles.input}>
        <TextInput
          placeholder="location"
          style={{ fontSize: 16 }}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity onPress={() => setMapSearch(search)}>
          <Image source={require('../components/search.png')} />
        </TouchableOpacity>
      </View>
      <Map location={mapSearch} />
      <TouchableOpacity style={styles.done}
        onPress={() => setLocationData(mapSearch)}>
        <Text style={{ color: 'white', fontSize: 18 }}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    alignContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    width: "80%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  done: {
    backgroundColor: 'grey',
    marginTop: 20,
    width: "60%",
    height: "7%",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Searchbar;