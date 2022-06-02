import React, {useState} from "react";
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import { width, height } from "app/src/config/globalStyles";
import { Box, Center, NativeBaseProvider, Button } from "native-base";

export default function MainWeatherInfo(){
    const [generalVisible, bytimeVisible] = useState(false);
    return <NativeBaseProvider>

            <ImageBackground source={require('app/assets/images/evening.png')}
                             alignSelf="center"
                             style = {{
                                 width : width*2130,
                                 height : height*230
                            }}
                             resizeMode="cover">
                    <View>

                        <WeatherInfo
                            generalVisible={generalVisible}
                            bytimeVisible={bytimeVisible}
                        />
                    </View>
            </ImageBackground>

    </NativeBaseProvider>;
};

const GeneralInfo = () => {
    return <Box alignItems="center" bg="red" flexDirection="row" justifyContent='space-between'
                style = {{
                    width : width*2130,
                    height : height*230,
                    paddingLeft : width*80,
                    paddingRight : width*90,
                }}
    >
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
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : width*220,
                 height : height*80
             }}
        >
            <Image
                source={require('app/assets/images/temperature.png')}
            />
            TEMP 27/15
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : width*219,
                 height : height*80
             }}
        >
            <Image
                source={require('app/assets/images/wind.png')}
            />
            WIND 3m/s
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : width*219,
                 height : height*80
             }}
        >
            <Image
                source={require('app/assets/images/pcpn.png')}
            />
            PCPN 52%
        </Box>
    </Box>;
};

const ByTimeInfo = () => {
    return <Box alignItems="center" flexDirection="row">
        <Button style={{ width: width*410, height: height*230 }} variant = "unstyled" onPress={() => console.log("hello world")}>
            6PM
            <Image source={require('app/assets/images/sun.png')} />
            13°C
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                30%</Box>
        </Button>
        <Button style={{ width: width*410, height: height*230 }} variant = "unstyled" onPress={() => console.log("hello world")}>
            7PM
            <Image source={require('app/assets/images/moon.png')} />
            12°C
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={{ width: width*410, height: height*230 }} variant = "unstyled" onPress={() => console.log("hello world")}>
            8PM
            <Image source={require('app/assets/images/moon.png')} />
            10°C
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                    80%
            </Box>
        </Button>
        <Button style={{ width: width*410, height: height*230 }} variant = "unstyled" onPress={() => console.log("hello world")}>
            9PM
            <Image source={require('app/assets/images/moon.png')} />
            8°C
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={{ width: width*410, height: height*230 }} variant = "unstyled" onPress={() => console.log("hello world")}>
            10PM
            <Image source={require('app/assets/images/raintime.png')} />
            8°C
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                20%
            </Box>
        </Button>
    </Box>;
};

const WeatherInfo = ({generalVisible, bytimeVisible}) => {
    return (
        <View>
            <GeneralInfo visible = {generalVisible} />
        </View>
    );
}

