import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

let item1 = 2;
let item2 = 6;
let item3 = 1;

const ClothNoReview = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style = {styles.clothContainer}>
            <View style = {styles.clothbox}>
                <Image source = {require("../../assets/images/jacket.png")} style = {styles.clothIcon}></Image>
                <Image source={require("../../assets/images/modal_icon.png")} style={styles.modalButton}></Image>
            </View>
            <View style = {styles.clothNameBox}>
                <Text style = {styles.clothName}>Jacket</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    clothContainer: {
        flex : 3,
        justifyContent : 'center',
        width : '97%',
      },
      clothbox : {

        flex : 0.45,
        width : 155,
        backgroundColor : 'rgba(255,255,255,0.7)',
        borderTopLeftRadius :15,
        borderTopRightRadius : 15,
        marginLeft : 20,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'relative'
      },
      clothIcon :{
        width : 80,
        height : 80,
        marginTop : 10
      },
      clothNameContainer:{
        flexDirection : 'row', 
        flex : 0.1,
      },
      clothNameBox : {
        flex : 0.455,
        backgroundColor : 'rgba(0,0,0,0.6)',
        alignItems : 'center',
        justifyContent : 'center',
        width: 155,
        marginLeft : 20,
        borderBottomLeftRadius : 15,
        borderBottomRightRadius : 15
      },
      clothName : {
        color : 'white',
        fontSize : 15,
        fontWeight : '600'
      },
      button : {
        marginLeft : 120
      },
      modalButton: {
        marginLeft: 120,
        marginBottom: 5,
      },
})

export default ClothNoReview;

