import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DownIcon from '../../assets/images/down.svg';
import { useIsFocused } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

export default function MainConstitSettingButton(){

    const [modalVisible, setModalVisible] = useState(false);
    const [constitution, setConstitution] = useState('NONE');
    const isFocused = useIsFocused();

    const setConstitutionData = async (value) => {
        try {
            await AsyncStorage.setItem('constitution', value)
            console.log('User constitution set to "' + value + '"')
        } catch (e) {
            console.log('User constitution data 저장 오류')
        }
    };

    const getConstitutionData = async () => {
        try {
            const value = await AsyncStorage.getItem('constitution');
            if (value !== null) {
                setConstitution(value);
                console.log('User constitution is : ' + value );
            }
        } catch (e) {
            console.log('User constitution data 불러오기 실패')
        }
    };

    useEffect(() => {
        getConstitutionData();
    }, [isFocused]);

    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.constitDescr}>sensitive to</Text>
            <Pressable
                onPress={()=>setModalVisible(true)}
                style={[styles.dropdown_default,styles.dropdown_modal_top, {borderBottomWidth:0}]}
            >
                <Text style={styles.dropdown_text}>{constitution}</Text>
                <WithLocalSvg
                    width={16}
                    height={16}
                    asset={DownIcon}
                />
            </Pressable>

            { modalVisible && 
                <View style={styles.dropdownContainer}>
                    <Pressable
                        style={[styles.dropdown_default, styles.dropdown_modal_top]}
                        onPress={()=>[setConstitutionData('NONE'), getConstitutionData(), setModalVisible(false)]}
                    >
                        <Text style={styles.dropdown_text}>NONE</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.dropdown_default, styles.dropdown_modal_mid]}
                        onPress={()=>[setConstitutionData('HOT'), getConstitutionData(), setModalVisible(false)]}
                    >
                        <Text style={styles.dropdown_text}>HOT</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.dropdown_default, styles.dropdown_modal_bottom]}
                        onPress={()=>[setConstitutionData('COLD'), getConstitutionData(), setModalVisible(false)]}
                    >
                        <Text style={styles.dropdown_text}>COLD</Text>
                    </Pressable>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: windowWidth*0.35,
        height: 50,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    dropdown_default: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 45,
        borderColor: '#A3A3A3',
        width: windowWidth*0.35,
        height: 28,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 38,
    },
    dropdown_text: {
        fontSize: 13,
        fontWeight: '500',
        color: '#5F5F5F',
        paddingLeft: 43,
    },
    dropdownContainer: {
        position: 'absolute',
        zIndex: 1,
        paddingTop: 50,
    },
    dropdown_modal_top: {
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    dropdown_modal_mid: {
        borderRadius: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    dropdown_modal_bottom: {
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    constitDescr:{
        fontSize: 15,
        color: '#7F7F7F',
        paddingBottom: 1,
    },
});