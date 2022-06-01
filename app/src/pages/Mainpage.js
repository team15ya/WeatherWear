import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground , Image} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Cloth from './components/Cloth.js';
import ClothNoReview from "./components/ClothNoReview.js";

const { width : SCREEN_WIDTH } = Dimensions.get("window");

export default function App(){
  return <View style = {styles.container}>
    <View style = {styles.city}>
      <Text>여기에 날씨 정보 component 추가</Text>
    </View>
    <View style = {styles.sensitiveTo}>
      <Text>Sensitive to</Text>
    </View>
    <View style = {styles.howbox}>
      <Text style = {styles.how}>How about these?</Text>
    </View>
    <View style = {styles.recommend}>
      <ImageBackground source = {require("/Users/maengsuyeon/Documents/react-native/WeatherWear/assets/sky.png")} style={styles.bgImage}>
        <ScrollView contentContainerStyle = {styles.box}>
          <View style={styles.line}>
            <View style = {styles.categorybox}>
            <Text style ={styles.category}>OUTER</Text>
            </View>
          </View>
          <View style = {styles.reviewcontainer}>
            <ClothNoReview/>
            <Cloth/>
          </View>
          <View style={styles.line}>
            <View style = {styles.categorybox}>
              <Text style ={styles.category}>TOP</Text>
            </View>
          </View>
          <View style = {styles.reviewcontainer}>
            <Cloth/>
          </View>
          <View style={styles.line}>
            <View style = {styles.categorybox}>
              <Text style ={styles.category}>BOTTOM</Text>
            </View>
          </View>
          <View style = {styles.reviewcontainer}>
            <Cloth />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor : '#FFF8F4',
    justifyContent : 'space-between',
  },
  city : {
    flex: 1, 
    justifyContent:"center",
    alignItems: "center",
  },
  sensitiveTo : {
    alignItems : 'flex-end',
    justifyContent : 'flex-end',
    marginRight : 50
  },
  recommend: {
    flex : 1.3,
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : 400,
  },
  bgImage : {
    width : '97%',
    height : '100%',
    marginLeft : 6,
    position : 'relative'
  },
  how : {
    fontSize : 16,
    color : "white",
    fontWeight : "600"
  },
  howbox : {
    flex : 0.1,
    backgroundColor : "#707B90",
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 9,
    width : '55%',
    borderTopLeftRadius : 15,
    borderTopRightRadius :15
  },
  line : {
    borderBottomColor: '#CAB0AE',
    borderBottomWidth: 3,
    marginVertical : 45,
    width: '97%',
    position : "relative"
  },
  categorybox : {
    flex : 1,
    backgroundColor : '#CAB0AE',
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    width : '20%',
    marginTop : -8,
    marginLeft : 35,
    position : "absolute",
    justifyContent : 'center',
    alignItems : 'center'
  },
  category : {
    color : "white",
    fontSize : 14,
    fontWeight : "700",
    justifyContent : 'center',
    alignItems : 'center',
  },
  box : {},
  reviewcontainer : { 
    flex : 1, 
    width : '97%',
    flexDirection : 'row',
    marginTop : -20,
  }
})
