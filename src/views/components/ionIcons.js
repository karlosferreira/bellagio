import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function IonIcon({name, size}) {
    return <>
        <View style={styles.icons}>
            <Icon name={name} size={size} style={styles.icon}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    icons: {},
    icon: {
        position: "absolute",
        right: 0,
        bottom: 0
    }
});