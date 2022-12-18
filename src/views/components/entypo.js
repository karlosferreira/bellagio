import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default function EntypoIcon({name, size, stylesheet}) {
    return <>
        <View style={styles.icons}>
            <Icon name={name} size={size} style={[stylesheet, styles.icon]}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    icons: {},
    icon: {
        right: 0,
        bottom: 0
    }
});