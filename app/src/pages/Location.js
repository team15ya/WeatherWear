import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";

import SearchBar from '../components/SearchBar';

const LocationScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.header}>Location</Text>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex:1,
    backgroundColor:'white',
  },
  header:{
    fontSize: 26,
    fontWeight: '500',
    color: 'black',
    marginTop:28,
    marginLeft:28
  }
})

export default LocationScreen;