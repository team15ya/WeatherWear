import React from "react";
import * as Font from "expo-font"
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
            width : 380,
            height : 170
        }}
        >
            <GeneralInfo />
        </Box>
    </Box>;
};

const GeneralInfo = () => {
    return <Box alignItems="center" flexDirection="row">
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : 50,
                 height : 60
             }}
        >
            icon
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : 50,
                 height : 60
             }}
        >
            12oC
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : 50,
                 height : 60
             }}
        >
            icon TEMP value
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : 50,
                 height : 60
             }}
        >
            icon WIND value
        </Box>
        <Box alignSelf="center" bg="green" _text={{
            fontSize: "sm",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}
             style = {{
                 width : 50,
                 height : 60
             }}
        >
            icon PCPN value
        </Box>
    </Box>;
};

const ByTimeInfo = () => {
    return <Box alignItems="center" flexDirection="row">
        <Button style={{ backgroundColor: '#707B90', width: 76, height: 160 }} onPress={() => console.log("hello world")}>6PM icon 13oC icon 30%</Button>
        <Button style={{ backgroundColor: '#707B90', width: 76, height: 160 }} onPress={() => console.log("hello world")}>7PM icon 12oC icon 50%</Button>
        <Button style={{ backgroundColor: '#707B90', width: 76, height: 160 }} onPress={() => console.log("hello world")}>8PM icon 10oC icon 80%</Button>
        <Button style={{ backgroundColor: '#707B90', width: 76, height: 160 }} onPress={() => console.log("hello world")}>9PM icon 8oC icon 50%</Button>
        <Button style={{ backgroundColor: '#707B90', width: 76, height: 160 }} onPress={() => console.log("hello world")}>10PM icon 8oC icon 20%</Button>
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
