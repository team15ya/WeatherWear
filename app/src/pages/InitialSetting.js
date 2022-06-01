import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';

import ConstitSettingButton from '../components/ConstitutionSettingButton';


const windowWidth = Dimensions.get('window').width;

const InitialSettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Initial Setting</Text>

      <Text style={styles.title}>ID</Text>
      <Pressable
        onPress={() => {}}
        style={styles.info}
      >
        <Text style={styles.infoText}>ewha</Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
        style={styles.logout}
      >
        <Text style={styles.logoutText}>LOGOUT</Text>
      </Pressable>

      <Text style={styles.title}>Location</Text>
      <Pressable
        onPress={() => navigation.navigate('Location')}
        style={styles.info}
      >
        <Text style={styles.infoText}>(location info)</Text>
      </Pressable>

      <Text style={styles.title}>Constitution</Text>
      <View style={styles.constitContainer}>
        <Text style={styles.constitDescr}>sensitive to</Text>
        <ConstitSettingButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 28,
    paddingTop: 64,
  },
  header: {
    position: 'absolute',
    padding: 28,
    paddingBottom: 20,
    fontSize: 26,
    fontWeight: '500',
    color: 'black',
  },
  info: {
    flexDirection: 'row',
    width: windowWidth-56,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#7F7F7F',
    marginBottom: 13,
    paddingBottom: 3,
  },
  infoText: {
    fontSize: 22,
    textAlignVertical: 'bottom',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 25,
  },
  logout: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A3A3A3',
    width: 80,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  logoutText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2F2F2F',
  },
  constitContainer: {
    flex:1,
    marginTop: 20,
    flexDirection: 'row',
    alignContent:'center', 
    justifyContent: 'center'
  },
  constitDescr:{
    fontSize: 18,
    color: '#7F7F7F',
},
});

export default InitialSettingScreen;