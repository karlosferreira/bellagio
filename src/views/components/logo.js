import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Logo({title, sub}) {
    return <>
        <Text style={[styles.logoTitle, styles.logoTitleDark]}>{title}</Text>
        <Text style={[styles.logoSub, styles.logoSubDark]}>{sub}</Text>            
    </>
}

const styles = StyleSheet.create({
    logoTitle: {
        color: '#fff',
        fontSize: 21,
        lineHeight: 25,
        paddingRight: 0,
        letterSpacing: 0.7,
        textAlign: 'center',
        fontFamily: 'Righteous-Regular',
    },
    logoSub: {
        color: '#fff',
        fontSize: 21,
        lineHeight: 25,
        paddingLeft: 0,
        letterSpacing: 0.7,
        textAlign: 'center',
        fontFamily: 'Righteous-Regular',
    },
    logoTitleDark: {
        color: '#16537e',
    },
    logoSubDark: {
        color: '#3d85c6',
    }
});