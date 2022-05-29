import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

export default function ConstitSettingButton(){

    const [modalVisible, setModalVisible] = useState(false);
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable
                onPress={()=>setModalVisible(true)}
            >
                <Text>NONE</Text>
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Pressable
                    onPress={()=>[onClose()]}
                >
                    <Text>NONE</Text>
                </Pressable>
                <Pressable
                    onPress={()=>[onClose()]}
                >
                    <Text>HOT</Text>
                </Pressable>
                <Pressable
                    onPress={()=>[onClose()]}
                >
                    <Text>COLD</Text>
                </Pressable>
            </View>
        </Modal>
    );
}