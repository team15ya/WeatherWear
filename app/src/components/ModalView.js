import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, Linking } from "react-native";

const ModalView = () => {

  return (
    <View style={styles.layout}>
      <View style={{ flexDirection: 'row', alignItems:'flex-end'}}>
        <View style={styles.clothe}>
          <Image
            style={{ height: 140, width: 200, resizeMode: 'contain' }}
            source={require('../../assets/images/jacketNoBg.png')} />
        </View>


        <View style={{ flexDirection: 'column', paddingTop: 20, paddingRight: 40, alignItems: 'flex-end' }}>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.title}>Jacket</Text>
          </View>
          <View style={styles.weather}>
            <Text style={styles.figure}>Recommended tmp</Text>
            <Text style={styles.value}>11℃</Text>
          </View>
          <View style={styles.weather}>
            <Text style={styles.figure}>Keyword</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.value}>wind</Text>
              <Text style={styles.value}>rain</Text>
            </View>
          </View>

        </View>

      </View>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.musinsa.com/search/musinsa/integration?type=&q=Jacket') }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>Go to MUSINSA</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingLeft: 10,
    height: 270,
    width: "90%",
    borderRadius: 15,
    elevation: 5,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent:'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900'
  },
  clothe: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  weather: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems:'flex-end',
    marginTop:5,
  },
  figure: {
    color: 'gray',
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 15,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 15,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft:5
  },
  button: {
    height: 45,
    width: 280,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
});

export default ModalView;