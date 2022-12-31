import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import EntypoIcon from "./entypo";


export default function WalletButton() {
    return <>
        <View style={styles.walletButton}>
            <TouchableHighlight>            
                <EntypoIcon name={"circle-with-plus"} size={21} stylesheet={styles.walletIcon} />
            </TouchableHighlight>
            <Text style={styles.walletAmount}>0 R$</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    walletIcon: {
        color: "#47c211",
    },
    walletButton: {
        flexDirection: "row",
        backgroundColor: "#eee",
        position: "absolute",
        left: 0,
        bottom: 15,
        borderRadius: 20,
    },
    walletAmount: {
        fontWeight: "500",
        paddingLeft: 5,
        paddingRight: 8,
        lineHeight: 21,
    }
});