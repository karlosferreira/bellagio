import React from "react";

import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function Tag({name, active}) {
    
    let arrClass = [];
    
    active == true ? arrClass = [styles.tagButton, styles.activeButton] : arrClass = [styles.tagButton]
    
    return <>
        <TouchableHighlight>
            <Text style={arrClass}>{name}</Text>
        </TouchableHighlight>
    </>
}

const styles = StyleSheet.create({
    tagButton: {
        backgroundColor: "#ffffff",
        width: "auto",
        paddingHorizontal: 12,
        paddingVertical: 3.5,
        textAlign: "center",
        marginRight: 8,
        lineHeight: 21,
        backgroundColor: "#fff",
        borderColor: "#e9e9e9",
        borderRadius: 100,
        fontSize: 15,
    },
    activeButton: {
        backgroundColor: "#3d85c6",
        color: "#fff"
    },
})