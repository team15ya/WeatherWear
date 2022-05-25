import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialSettingScreen from './pages/InitialSetting';


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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="마이페이지"
        onPress={() =>
          navigation.navigate('Mypage')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


function Root() {
  return (
    <Stack.Navigator initialRouteName="InitialSettings">
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="InitialSettings" component={InitialSettingScreen} />
      <Stack.Screen name="Mypage" component={MypageScreen} />
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