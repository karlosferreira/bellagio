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
        paddingHorizontal: 14,
        paddingVertical: 3.5,
        textAlign: "center",
        marginRight: 7,
        lineHeight: 19,
        backgroundColor: "#fff",
        borderColor: "#e9e9e9",
        fontFamily: "Poppins-Regular",
        borderRadius: 100,
    },
    activeButton: {
        backgroundColor: "#3d85c6",
        color: "#fff"
    },
})