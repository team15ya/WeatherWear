import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, Linking } from "react-native";

const ModalView = () => {

    return (
        <View style={styles.layout}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.clothe}>
                    <Text style={styles.title}>Hoody</Text>
                    <Image
                        style={{ height: 100, width: 200, resizeMode: 'contain' }}
                        source={{ uri: 'https://thumbs.dreamstime.com/b/cloth-icon-website-design-desktop-envelopment-development-premium-pack-cloth-vector-thin-line-icon-164112544.jpg' }} />
                </View>


                <View style={{flexDirection:'column', paddingTop:20, paddingRight:40}}>
                    <View>
                        <Text>recommended for</Text>
                    </View>
                    <View style={styles.weather}>
                        <Text style={styles.figure}>temp  </Text>
                        <Text style={styles.value}>11</Text>
                    </View>
                    <View style={styles.weather}>
                        <Text style={styles.figure}>PCPN  </Text>
                        <Text style={styles.value}>70%</Text>
                    </View>
                    <View style={styles.weather}>
                        <Text style={styles.figure}>wind  </Text>
                        <Text style={styles.value}>14km/h</Text>
                    </View>

                </View>

            </View>
            <View style={{paddingTop:20}}>
                <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.musinsa.com/search/musinsa/integration?type=&q=HOODy') }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Goto Musinsa</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        paddingTop:30,
        paddingLeft:10,
        paddingRight:10,
        height:250,
        width: "80%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 4,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    clothe: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    },
    weather: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    figure: {
        color: 'gray'
    },
    value: {
        fontSize: 18,
        color: 'black'
    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: '#507EC1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});

export default ModalView;