import React from "react";
import * as Font from "expo-font"
import { Image } from 'react-native';
import { width, height } from "app/src/config/globalStyles";
import { Box, Center, NativeBaseProvider, Button } from "native-base";

const InfoBox = () => {
    return <Box>
        <Box alignSelf="center" bg="#707B90" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
        style = {{
            width : width*2100,
            height : height*230,
            paddingTop : height*60,
            paddingLeft : width*50,
            paddingRight : width*50
        }}
        >
            <GeneralInfo />
        </Box>
    </Box>;
};

const GeneralInfo = () => {
    return <Box alignItems="center" bg="red" flexDirection="row" justifyContent='space-between' >
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
        >
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
                 width : width*219,
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
        <Button style={{ backgroundColor: '#CAB0AE', width: width*410, height: height*230 }} onPress={() => console.log("hello world")}>
            6PM
            <Image source={require('app/assets/images/sun.png')} />
            13oC
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                30%</Box>
        </Button>
        <Button style={{ backgroundColor: '#707B90', width: width*410, height: height*230 }} onPress={() => console.log("hello world")}>
            7PM
            <Image source={require('app/assets/images/moon.png')} />
            12oC
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={{ backgroundColor: '#707B90', width: width*410, height: height*230 }} onPress={() => console.log("hello world")}>
            8PM
            <Image source={require('app/assets/images/moon.png')} />
            10oC
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                    80%
            </Box>
        </Button>
        <Button style={{ backgroundColor: '#707B90', width: width*410, height: height*230 }} onPress={() => console.log("hello world")}>
            9PM
            <Image source={require('app/assets/images/moon.png')} />
            8oC
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                50%
            </Box>
        </Button>
        <Button style={{ backgroundColor: '#707B90', width: width*410, height: 160 }} onPress={() => console.log("hello world")}>
            10PM
            <Image source={require('app/assets/images/raintime.png')} />
            8oC
            <Box flexDirection="row">
                <Image source={require('app/assets/images/pcpntime.png')} />
                20%
            </Box>
        </Button>
    </Box>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="90">
                <InfoBox />
            </Center>
        </NativeBaseProvider>
    );
};
