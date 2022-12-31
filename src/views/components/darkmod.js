import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import EntypoIcon from "./entypo";

export default function DarkModToggle() {
    return <>
        <TouchableHighlight style={styles.darkModToggle}>
            <EntypoIcon name={"adjust"} size={21} />
        </TouchableHighlight>
    </>
}

const styles = StyleSheet.create({
    darkModToggle: {
        position: "absolute",
        right: 0,
        bottom: 11
    }
});