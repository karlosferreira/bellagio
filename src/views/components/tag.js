import React from "react";

import { StyleSheet, Text } from "react-native";

export default function Tag({name, active}) {
    
    let arrClass = [];
    
    active == true ? arrClass = [styles.tagButton, styles.activeButton] : arrClass = [styles.tagButton]
    
    return <>
        <Text style={arrClass}>{name}</Text>
    </>
}

const styles = StyleSheet.create({
    tagButton: {
        backgroundColor: "#ffffff",
        width: "auto",
        fontSize: 11.5,
        textAlign: "center",
        marginRight: 7,
        paddingVertical: 2.5,
        paddingHorizontal: 7,
        paddingRight: 8.3,
        backgroundColor: "#fff",
        borderRadius: 14,
        borderColor: "#e9e9e9",
        borderBottomWidth: 2.5,
        lineHeight: 20
    },
    activeButton: {
        backgroundColor: "#3d85c6",
        color: "#fff"
    },
})