import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground , Image} from "react-native";
import Cloth from '../components/Cloth';
import ClothNoReview from "../components/ClothNoReview";
import MainConstitutionSettingButton from '../components/MainConstitutionSettingButton';

export default function App(){
  return (
    <View style = {styles.container}>

      <View style = {styles.headerContainer}>
        <View style = {styles.howbox}>
          <Text style = {styles.how}>How about these?</Text>
        </View>
        <MainConstitutionSettingButton/>
      </View>

      <View style = {styles.recommend}>
        <ImageBackground source = {require("../../assets/images/afternoon.png")} style={styles.bgImage}>
          <View style={styles.line}>
            <View style = {styles.categorybox}>
            <Text style ={styles.category}>OUTER</Text>
            </View>
          </View>
          <View style = {styles.reviewcontainer}>
            <Cloth/>
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
        </ImageBackground>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF8F4',
    padding: 7,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  howbox: {
    height: 28,
    width: '62%',
    backgroundColor: "#707B90",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  how: {
    fontSize: 15,
    color: "white",
    fontWeight: "600"
  },
  recommend: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    marginTop: -1,
    width: '100%',
    height: '100%',
  },
  line: {
    borderBottomColor: '#CAB0AE',
    borderBottomWidth: 3,
    marginVertical: 30,
    width: '100%',
    position: "relative"
  },
  categorybox: {
    flex: 1,
    width: 87,
    height: 27,
    backgroundColor: '#CAB0AE',
    borderRadius: 20,
    marginTop: -12.5,
    marginLeft: 19,
    position: "absolute",
    justifyConten: 'center',
    alignItems: 'center'
  },
  category: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewcontainer: { 
    flex: 1, 
    width: '100%',
    flexDirection : 'row',
    marginBottom: 20,
  }
})
