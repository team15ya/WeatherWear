import React from "react";
import { Box, Center, NativeBaseProvider, Button } from "native-base";

const InfoButton = () => {
    return <Box alignItems="center" flexDirection="row">
        <Button style={{ backgroundColor: '#707B90', borderRadius: 5, width: 190, height: 38 }} onPress={() => console.log("hello world")}>GENERAL</Button>
        <Button style={{ backgroundColor: '#CAB0AE', borderRadius: 5 ,width: 190, height: 38 }} onPress={() => console.log("hello world")}>BY TIME</Button>
    </Box>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="90">
                <InfoButton />
            </Center>
        </NativeBaseProvider>
    );
};
