import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialSettingScreen from './pages/InitialSetting';
import LocationScreen from './pages/Location';
import MypageScreen from './pages/Mypage';
import MainpageScreen from './pages/Main';


const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator 
      initialRouteName="InitialSettings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="InitialSettings"
        component={InitialSettingScreen}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
      />
      <Stack.Screen
        name="Mypage"
        component={MypageScreen}
      />
      <Stack.Screen 
        name="Mainpage" 
        component={MainpageScreen} 
      />
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