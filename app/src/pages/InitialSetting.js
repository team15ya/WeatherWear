import React from 'react';
import { View, Button } from 'react-native';


const InitialSettingScreen = ({ navigation }) => {
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

export default InitialSettingScreen;