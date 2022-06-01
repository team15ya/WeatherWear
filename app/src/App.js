import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoxEx from './components/MainWeatherType';
import Day from './components/MainDayList'
import InfoButton from './components/MainWeatherType'
import InfoBox from './components/MainWeatherInfo'

import InitialSettingScreen from './pages/InitialSetting';
import MypageScreen from './pages/Mypage';


function LocationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="마이페이지"
        onPress={() =>
          navigation.navigate('Mypage')}
      />
    </View>
  );
}

function InitialSettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="위치선택"
        onPress={() =>
          navigation.navigate('Location')}
      />
    </View>
  );
}

function MypageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="메인페이지"
        onPress={() =>
          navigation.navigate('Mainpage')}
      />
    </View>
  );
}


function MainpageScreen({ navigation }) {
  return (
    <View style= {{ flex: 1, backgroundColor: '#FFF8F4' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  flexDirection: 'row' }}>
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
        <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="마이페이지(임시)"
                onPress={() =>
                    navigation.navigate('Mypage')}
            />
        </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();


function Root() {
  return (
    <Stack.Navigator initialRouteName="InitialSettings">
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen 
        name="InitialSettings" 
        component={InitialSettingScreen} 
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Mypage" 
        component={MypageScreen} 
        options={{headerShown:false}}
      />
      <Stack.Screen name="Mainpage" component={MainpageScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}





export default App;