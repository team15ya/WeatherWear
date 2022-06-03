import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, Image, Button, TouchableOpacity } from "react-native";

import DayList from '../components/MainDayList'
import InfoBox from '../components/MainWeatherInfo'

import Mainpage from './Mainpage'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Main = () => {
  const [location, setLocation] = useState('');
  const isFocused = useIsFocused();

  const getLocationData = async () => {
    try {
      const value = await AsyncStorage.getItem('location')
      if (value !== null) {
        setLocation(value);
      }
    } catch (e) {
      alert('user location information fetch 실패');
    }
  };

  useEffect(() => {
    getLocationData();
  }, [isFocused]);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF8F4' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.done} onPress={() => navigation.navigate('InitialSettings')}>
          <Image source={require("../../assets/images/mypage.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.header}>{location}</Text>
        <Text>23:11</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <DayList />
      </View>
      <View style={{ flex: 5 }}>
        <InfoBox />
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