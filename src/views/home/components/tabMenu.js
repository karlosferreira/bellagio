import React from "react";

import { StyleSheet, TouchableHighlight, View } from "react-native";
import TabItem from "../../components/tabs";

export default function TabMenu({style}) {
    return <View style={{...style, flexDirection: "row"}}>
        <TouchableHighlight style={styles.btnFooter} >
            <TabItem name={"Sports"} iconName={"football"} size={21} ionIcons={true} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnFooter}>
            <TabItem name={"eSports"} iconName={"game-controller"} size={21} ionIcons={true} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnFooter}>
            <TabItem name={"Games"} iconName={"logo-google-playstore"} size={21} ionIcons={true} active={true} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnFooter}>
            <TabItem name={"Histórico"} iconName={"time"} size={21} ionIcons={true} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnFooter} >
            <TabItem name={"Menu"} iconName={"grid"} size={21} ionIcons={true} />
        </TouchableHighlight>
    </View>
}

const styles = StyleSheet.create({
    btnFooter: {
        marginHorizontal: 6
    }
})