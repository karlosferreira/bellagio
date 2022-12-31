import React from "react";

import { StyleSheet, Text, View } from "react-native";
import EntypoIcon from "./entypo";
import IonIcon from "./ionIcons";

export default function TabItem({name, iconName, size, ionIcons=false, active=false}) {
    if (ionIcons != false) {
        return <View style={styles.tabItem}>
            <IonIcon name={iconName} size={size} />
            <Text style={styles.tabTitle}>{name}</Text>
        </View>
    } else {
        return <View style={styles.tabItem}>
            <EntypoIcon name={iconName} size={size} />
            <Text style={[styles.tabTitle]}>{name}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    tabItem: {
        padding: 3.5,
        marginLeft: "auto",
        marginRight: "auto"
    },
    tabTitle: {
        fontFamily: "Poppins-Regular",
        fontSize: 12.5
    },
    tabActive: {
        color: "#3d85c6"
    }
})