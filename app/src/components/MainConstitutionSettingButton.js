import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DownIcon from '../../assets/images/down.svg';
import { useIsFocused } from '@react-navigation/native';


export default function MainConstitSettingButton(){

    const [modalVisible, setModalVisible] = useState(false);
    const [constitution, setConstitution] = useState('NONE');
    const isFocused = useIsFocused();

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
        <View>
            <Pressable
                onPress={()=>setModalVisible(true)}
                style={styles.dropdown_default}
            >
                <Text style={styles.dropdown_text}>{constitution}</Text>
                <WithLocalSvg
                    width={16}
                    height={16}
                    asset={DownIcon}
                />
            </Pressable>
  
            <ConstitModal 
                visible={modalVisible} 
                onClose={() => [setModalVisible(false), , getConstitutionData()]}
            />
        </View>
    );
  }

const ConstitModal = ({visible, onClose}) => {
  
    const setConstitutionData = async (value) => {
        try {
            await AsyncStorage.setItem('constitution', value)
            console.log('User constitution set to "' + value + '"')
        } catch (e) {
            console.log('User constitution data 저장 오류')
        }
    };

    return (
        <Modal
            visible={visible}
            animationType='none'
            transparent={true}
        >
            <Pressable 
                style={styles.modalView}
                onPress={() => onClose()}
            >
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_top]}
                    onPress={()=>[setConstitutionData('NONE'), onClose()]}
                >
                    <Text style={styles.dropdown_text}>NONE</Text>
                </Pressable>
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_mid]}
                    onPress={()=>[setConstitutionData('HOT'), onClose()]}
                >
                    <Text style={styles.dropdown_text}>HOT</Text>
                </Pressable>
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_bottom]}
                    onPress={()=>[setConstitutionData('COLD'), onClose()]}
                >
                    <Text style={styles.dropdown_text}>COLD</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    dropdown_default: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 45,
        borderColor: '#A3A3A3',
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        paddingRight: 18,
    },
    dropdown_text: {
        fontSize: 13,
        fontWeight: '500',
        color: '#5F5F5F',
        paddingLeft: 23,
    },
    modalView: {
        flex: 1,
        paddingTop: 394,
        paddingLeft: 121,
        backgroundColor: '#00000022',
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
});