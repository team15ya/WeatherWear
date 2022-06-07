import React from "react";
import { View, Dimensions } from 'react-native';
import { Button, Box, Center, NativeBaseProvider } from "native-base";
import { width, height } from "app/src/config/globalStyles";
import {StyleSheet, Text} from "react-native";

let today = new Date();
const time = {
    date:today.getDate()
}
let day = 18;

const windowWidth = Dimensions.get('window').width;

const DayList = () => {

    const daySelected = (value) => {
        console.log("Selected day : " + value);
    };

    return (
        <View style={styles.listContainer}>
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
        </View>
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
        flexDirection: "row",
        height: 55,
        width: windowWidth-24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 45,
        width: 45,
        height: 45,
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