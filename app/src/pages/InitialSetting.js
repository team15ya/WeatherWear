import React from 'react';
import { View, Text, Pressable } from 'react-native';
// import { Ionicons, AntDesign } from '@expo/vector-icons';


const InitialSettingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Initial Setting</Text>

      <Text>ID</Text>
      <Pressable
        onPress={() => {}}
      >
        <Text>ewha</Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
      >
        <Text>LOGOUT</Text>
      </Pressable>

      <Text>Location</Text>
      <Pressable
        onPress={() => navigation.navigate('Location')}
      >
        <Text>(location info)</Text>
        {/* <Ionicons name="search-sharp"/> */}
      </Pressable>
      
      <Text>Constitution</Text>
      <Pressable>
        <Text>Dropdown</Text>
        {/* <AntDesign name="down"/> */}
      </Pressable>
    </View>
  );
}

export default InitialSettingScreen;