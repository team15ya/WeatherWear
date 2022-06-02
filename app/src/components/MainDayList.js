import React from "react";
import { Button, Box, Center, NativeBaseProvider } from "native-base";
import { width, height } from "app/src/config/globalStyles";
import {StyleSheet, Text} from "react-native";

let today = new Date();
const time = {
    date:today.getDate()
}
let day = 18;


const DayList = () => {
    return <Box alignItems="center" flexDirection="row"
    >
        <Button style={styles.today} onPress={() => console.log("hello world")}>{day}</Button>
        <Button style={styles.day} onPress={() => console.log("hello world")}>{day+1}</Button>
        <Button style={styles.day} onPress={() => console.log("hello world")}>{day+2}</Button>
        <Button style={styles.selectday} onPress={() => console.log("hello world")}>{day+3}</Button>
        <Button style={styles.day} onPress={() => console.log("hello world")}>{day+4}</Button>
        <Button style={styles.day} onPress={() => console.log("hello world")}>{day+5}</Button>
        <Button style={styles.day} onPress={() => console.log("hello world")}>{day+6}</Button>
    </Box>;
};



export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="2">
                <DayList />
            </Center>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    today: {
        borderRadius: 50,
        backgroundColor: '#CAB0AE',
        borderStyle: 'solid',
        borderColor : '#707B90',
        borderWidth: 2.5,
        width : width*250,
        height : height*60,
        marginTop: height*7,
        marginLeft : width*30,
        marginRight : width*30
    },
    selectday:{
        borderRadius: 50,
        backgroundColor: '#707B90',
        width : width*250,
        height : height*60,
        marginTop: height*7,
        marginLeft : width*30,
        marginRight : width*30
    },
    day:{
        borderRadius: 50,
        backgroundColor: '#CAB0AE',
        width : width*250,
        height : height*60,
        marginTop: height*7,
        marginLeft : width*30,
        marginRight : width*30
    }
})