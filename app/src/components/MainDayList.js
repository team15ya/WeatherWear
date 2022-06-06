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

    const daySelected = (value) => {
        console.log("Selected day : " + value);
    };

    return (
        <Box style={styles.listContainer}>
            <Button style={[styles.button, styles.today]} onPress={() => daySelected(day)}>
                <Text style={styles.buttonText}>{day}</Text>
            </Button>
            <Button style={[styles.button, styles.day]} onPress={() => daySelected(day+1)}>
                <Text style={styles.buttonText}>{day+1}</Text>
            </Button>
            <Button style={[styles.button, styles.day]} onPress={() => daySelected(day+2)}>
                <Text style={styles.buttonText}>{day+2}</Text>
            </Button>
            <Button style={[styles.button, styles.selectday]} onPress={() => daySelected(day+3)}>
                <Text style={styles.buttonText}>{day+3}</Text>
            </Button>
            <Button style={[styles.button, styles.day]} onPress={() => daySelected(day+4)}>
                <Text style={styles.buttonText}>{day+4}</Text>
            </Button>
            <Button style={[styles.button, styles.day]} onPress={() => daySelected(day+5)}>
                <Text style={styles.buttonText}>{day+5}</Text>
            </Button>
            <Button style={[styles.button, styles.day]} onPress={() => daySelected(day+6)}>
                <Text style={styles.buttonText}>{day+6}</Text>
            </Button>
        </Box>
    );
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
    listContainer: {
        height: 55,
        justifyContents: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },
    button: {
        borderRadius: 45,
        width: 45,
        height: 45,
        margin: 5,
    },
    today: {
        backgroundColor: '#CAB0AE',
        borderColor : '#707B90',
        borderWidth: 2.5,
    },
    selectday:{
        backgroundColor: '#707B90',
    },
    day:{
        backgroundColor: '#CAB0AE',
    },
    buttonText: {
        fontSize: 13,
        fontWeight: '700',
        color: 'white',
    }
})