import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ModalView from './ModalView';

let item1 = 2;
let item2 = 6;
let item3 = 1;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Cloth = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.clothContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalPosition}>
          <ModalView />
        </View>
      </Modal>


      <View style={styles.clothbox}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image source={require("../../assets/images/jacket.png")} style={styles.clothIcon}></Image>
        </TouchableOpacity>
        <Icon name="controller-volume" size={12} color="rgba(0,0,0,0.7)" style={styles.button} />
      </View>
      <View style={styles.clothNameBox}>
        <Text style={styles.clothName}>Jacket</Text>
      </View>
      <View style={styles.review}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.reviewbox1}
        >
          <Image source={require("../../assets/images/cold.png")} style={styles.icon1}></Image>
          <Text style={styles.reviewnum}>{item1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={styles.reviewbox2}
        >
          <Image source={require("../../assets/images/good.png")} style={styles.icon1}></Image>
          <Text style={styles.reviewnum}>{item2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={styles.reviewbox3}
        >
          <Image source={require("../../assets/images/hot.png")} style={styles.icon1}></Image>
          <Text style={styles.reviewnum}>{item3}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clothContainer: {
    flex: 3,
    justifyContent: 'center',
    width: '97%',
  },
  reviewcontainer: {
    flex: 0.25,
    width: '97%',
    flexDirection: 'row',
    marginTop: -20,
    backgroundColor: 'yellow'
  },
  clothbox: {
    flex: 0.45,
    width: 155,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  clothIcon: {
    width: 80,
    height: 80,
    marginTop: 10
  },
  clothNameContainer: {
    flexDirection: 'row',
    flex: 0.1,
  },
  clothNameBox: {
    flex: 0.455,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    marginLeft: 20
  },
  clothName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  review: {
    flex: 3,
    flexDirection: 'row',
    width: "48.5%",
    height: 50
  },
  reviewbox1: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 50,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  reviewbox2: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 50,
    marginLeft: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewbox3: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 50,
    marginLeft: 2.5,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon1: {
    width: '75%',
    height: '75%',
    marginTop: -7
  },
  reviewnum: {
    fontWeight: '700',
    marginTop: -4
  },
  box: {},
  clothbox2: {
    backgroundColor: "oranage",
    flex: 1
  },
  button: {
    marginLeft: 120
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7
  },
  modalPosition: {
    flex: 1,
    top: windowWidth * 0.5,
    left: windowWidth / 10,
    position: 'absolute',
  }
})

export default Cloth;
