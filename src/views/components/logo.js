import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Logo({title, sub}) {
    return <>
        <Text style={[styles.logoTitle, styles.logoTitleDark]}>{title}</Text>
        <Text style={[styles.logoSub, styles.logoSubDark]}>{sub}</Text>            
    </>
}

const styles = StyleSheet.create({
    logoTitle: {
        color: '#fff',
        fontSize: 18,
        padding: 7,
        paddingRight: 0,
        letterSpacing: -0.3,
        textAlign: 'center',
        fontFamily: 'RussoOne-Regular',
    },
    logoSub: {
        color: '#fff',
        fontSize: 18,
        padding: 7,
        paddingLeft: 0,
        letterSpacing: -0.3,
        textAlign: 'center',
        fontFamily: 'RussoOne-Regular',
    },
    logoTitleDark: {
        color: '#16537e',
    },
    logoSubDark: {
        color: '#3d85c6',
    }
});