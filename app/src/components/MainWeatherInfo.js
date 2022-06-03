import React, {useState} from "react";
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import { width, height } from "app/src/config/globalStyles";
import { Box, Center, NativeBaseProvider, Button } from "native-base";



export default function MainWeatherInfo(){

    const [generalstyle, setGeneralStyle] = useState(styles.typeselected);
    const [bytimestyle, setBytimeStyle] = useState(styles.type);
    const [generalvisible, setGeneralVisible] = useState(true);
    const [bytimevisible, setBytimeVisible] = useState(false);

    return <NativeBaseProvider>
        <Box>
            <Box alignItems="center" flexDirection="row" style = {styles.typebox}>
                <Button style={generalstyle} onPress={() => {setGeneralStyle(styles.typeselected); setBytimeStyle(styles.type); setGeneralVisible(true); setBytimeVisible(false);}}>
                    <Text style={{color:"white"}}>GENERAL</Text>
                </Button>
                <Button style={bytimestyle} onPress={() => {setBytimeStyle(styles.typeselected); setGeneralStyle(styles.type); setGeneralVisible(false); setBytimeVisible(true);}}>
                    <Text style={{color:"white"}}>BY TIME</Text>
                </Button>
            </Box>
            <ImageBackground source={require('app/assets/images/evening.png')}
                             alignSelf="center"
                             imageStyle={{borderBottomLeftRadius:20, borderBottomRightRadius:20}}
                             style = {styles.imagebg}
                             resizeMode="cover">
                    <View>
                        {generalvisible && <GeneralInfo />}
                        {bytimevisible && <ByTimeInfo />}
                    </View>
            </ImageBackground>
        </Box>
    </NativeBaseProvider>;
};



const GeneralInfo = () => {
    return <Box alignItems="center" flexDirection="row" justifyContent='space-between' style = {styles.generalTotalBox}>
        <Box alignSelf="center">
            <Image
                source={require('app/assets/images/rainday.png')}
            />
        </Box>
        <Box>
            <Image
                source={require('app/assets/images/12°C.png')}
            />
        </Box>
        <Box alignSelf="center" _text={styles.generaltext}
             style = {styles.generalBox}
        >
            <Image
                source={require('app/assets/images/temperature.png')}
            />
            TEMP 27/15
        </Box>
        <Box alignSelf="center" _text={styles.generaltext}
             style = {styles.generalBox}
        >
            <Image
                source={require('app/assets/images/wind.png')}
            />
            WIND 3m/s
        </Box>
        <Box alignSelf="center" _text={styles.generaltext}
             style = {styles.generalBox}
        >
            <Image
                source={require('app/assets/images/pcpn.png')}
            />
            PCPN 52%
        </Box>
    </Box>;
};


const ByTimeInfo = () => {
    const [dtimestyle, setDTimeStyle] = useState(styles.bytimeSelect);
    const [otimestyle, setOTimeStyle] = useState(styles.bytimeBox);
    return <Box alignItems="center" flexDirection="row" justifyContent="space-between"
                style = {{
                    paddingLeft : width*40,
                    paddingRight : width*40,
                }}
    >
        <Button style={dtimestyle} onPress={() => {setDTimeStyle(styles.bytimeSelect); setOTimeStyle(styles.bytimeBox);} }
        >
            <Box alignSelf="center" _text={styles.bytimetext}>6PM</Box>
            <Image source={require('app/assets/images/sun.png')} />
            <Box alignSelf="center" _text={styles.bytimetext}>13°C</Box>
            <Box flexDirection="row" _text={styles.bytimetext}>
                <Image source={require('app/assets/images/pcpntime.png')} />
                30%</Box>
        </Button>
        <Button style={styles.bytimeBox} variant = "unstyled" onPress={() => console.log("7PM")}>
            <Box alignSelf="center" _text={styles.bytimetext}>7PM</Box>
            <Image source={require('app/assets/images/moon.png')} />
            <Box alignSelf="center" _text={styles.bytimetext}>12°C</Box>
            <Box flexDirection="row" _text={styles.bytimetext}>
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={otimestyle} variant = "unstyled" onPress={() => {setDTimeStyle(styles.bytimeBox); setOTimeStyle(styles.bytimeSelect);}}>
            <Box alignSelf="center" _text={styles.bytimetext}>8PM</Box>
            <Image source={require('app/assets/images/moon.png')} />
            <Box alignSelf="center" _text={styles.bytimetext}>10°C</Box>
            <Box flexDirection="row" _text={styles.bytimetext}>
                <Image source={require('app/assets/images/pcpntime.png')} />
                    80%
            </Box>
        </Button>
        <Button style={styles.bytimeBox} variant = "unstyled" onPress={() => console.log("9PM")}>
            <Box alignSelf="center" _text={styles.bytimetext}>9PM</Box>
            <Image source={require('app/assets/images/moon.png')} />
            <Box alignSelf="center" _text={styles.bytimetext}>8°C</Box>
            <Box flexDirection="row" _text={styles.bytimetext}>
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={styles.bytimeBox} variant = "unstyled" onPress={() => console.log("10PM")}>
            <Box alignSelf="center" _text={styles.bytimetext}>10PM</Box>
            <Image source={require('app/assets/images/raintime.png')} />
            <Box alignSelf="center" _text={styles.bytimetext}>8°C</Box>
            <Box flexDirection="row" _text={styles.bytimetext}>
                <Image source={require('app/assets/images/pcpntime.png')} />
                20%
            </Box>
        </Button>
    </Box>;
};


const styles = StyleSheet.create({
    generalBox: {
        width : width*220,
        height : height*80
    },
    generaltext : {
        fontSize: "sm",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg"
    },
    generalTotalBox: {
        width : width*2130,
        height : height*140,
        paddingLeft : width*80,
        paddingRight : width*90
    },
    bytimetext : {
        fontSize: "sm",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg"
    },
    bytimeSelect: {
        width: width*410,
        height: height*230,
        backgroundColor:"rgba(200, 200, 200, 0.4)"
    },
    bytimeBox: {
        width: width*410,
        height: height*230,
        backgroundColor:"rgba(200, 200, 200, 0)"
    },
    typeselected:{
        backgroundColor: '#707B90',
        borderTopRightRadius:5,
        borderTopLeftRadius:5,    
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        width: width*1050,
        height: height*53
    },
    type:{
        backgroundColor: '#CAB0AE',
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        width: width*1050,
        height: height*53
    },
    typebox:{
        marginTop: height*15,
        marginLeft : width*40,
        marginRight : width*40,
    },
    imagebg:{
        width : width*2130,
        height : height*230,
        marginLeft: width*20,
        justifyContent:'center',
        alignItems:'center',
    }


})

