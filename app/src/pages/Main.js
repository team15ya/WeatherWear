import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, Image, Button, TouchableOpacity } from "react-native";

import BoxEx from '../components/MainWeatherType';
import Day from '../components/MainDayList'
import InfoButton from '../components/MainWeatherType'
import InfoBox from '../components/MainWeatherInfo'

import Mainpage from './Mainpage'
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF8F4' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.done} onPress={() => navigation.navigate('InitialSettings')}>
          <Image source={require("../../assets/images/mypage.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.header}>Location</Text>
        <Text>23:11</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Day /><Day /><Day /><Day /><Day /><Day /><Day />
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1.3 }}>
          <InfoButton />
        </View>
        <View style={{ flex: 4 }}>
          <InfoBox />
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <Mainpage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  headerContainer: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    height: 30,
    width: 30
  }
})

export default Main;