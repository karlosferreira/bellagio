import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';


export default function WalletButton() {
    return <>
        <View style={styles.walletButton}>
            <Icon name="circle-with-plus" size={18} style={styles.walletIcon}/>
            <Text style={styles.walletAmount}>0 R$</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    walletIcon: {
        color: "#47c211"
    },
    walletButton: {
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
        position: "absolute",
        left: 0,
        bottom: 8.3,
        borderRadius: 20,
    },
    walletAmount: {
        fontSize: 10,
        fontWeight: "500",
        paddingLeft: 2,
        paddingRight: 8,
        lineHeight: 19,
    }
});