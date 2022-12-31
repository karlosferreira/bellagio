import React from "react";

import { StyleSheet, TouchableHighlight, View } from "react-native";
import TabMenu from "./tabMenu";


export default function Footer() {
    return <View style={styles.footer}>
        <TabMenu />
    </View>
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 4,
        borderTopWidth: 0.4,
        borderColor: "rgba(0,0,0,0.3)",
        backgroundColor: "#fff"
    }
})