import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

export default function ConstitSettingButton(){

    const [modalVisible, setModalVisible] = useState(false);
  
    return (
        <View>
            <Pressable
                onPress={()=>setModalVisible(true)}
                style={styles.dropdown_default}
            >
                <Text style={styles.dropdown_text}>NONE</Text>
                {/* <AntDesign name="down"/> */}
            </Pressable>
  
            <ConstitModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
  }

const ConstitModal = ({visible, onClose}) => {

    return (
        <Modal
            visible={visible}
            animationType='none'
            transparent={true}
        >
            <View 
                style={styles.modalView}
            >
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_top]}
                    onPress={()=>[onClose()]}
                >
                    <Text style={styles.dropdown_text}>NONE</Text>
                </Pressable>
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_mid]}
                    onPress={()=>[onClose()]}
                >
                    <Text style={styles.dropdown_text}>HOT</Text>
                </Pressable>
                <Pressable
                    style={[styles.dropdown_default, styles.dropdown_modal_bottom]}
                    onPress={()=>[onClose()]}
                >
                    <Text style={styles.dropdown_text}>COLD</Text>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    dropdown_default: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 45,
        borderColor: '#A3A3A3',
        width: 100,
        height: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 22,
        marginLeft: 10,
    },
    dropdown_text: {
        fontSize: 13,
        fontWeight: '500',
        color: '#5F5F5F',
    },
    modalView: {
        flex: 1,
        alignItems: "center",
        alignSelf: 'flex-start',
        width: 100,
        height: 30,
        marginTop: 363.5,
        marginLeft: 126.5,
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