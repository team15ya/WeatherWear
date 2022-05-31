import React from 'react';
import { View, Button } from 'react-native';

const MypageScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="메인페이지"
                onPress={() =>
                navigation.navigate('Mainpage')}
            />
        </View>
    );
}

export default MypageScreen;