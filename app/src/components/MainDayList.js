import React from "react";
import { Button, Box, Center, NativeBaseProvider } from "native-base";

let day = 18;
let today = new Date();
let date = today.getDate();

const Day = (day) => {
    return <Box alignItems="center">
        <Button style={{ borderRadius: 50, backgroundColor: '#CAB0AE' }} onPress={() => console.log("hello world")}>18</Button>
    </Box>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="2">
                <Day />
            </Center>
        </NativeBaseProvider>
    );
};
