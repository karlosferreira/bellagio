import React from "react";

import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import EntypoIcon from "./entypo";

export default function Item({title, img}) {
    return <>
        <View style={styles.item}>
            <TouchableHighlight>
                <Image source={img} style={styles.itemCover} />
            </TouchableHighlight>
            <View style={styles.info}>
                <View style={styles.container}>
                    <Text style={styles.gameName}>{title}</Text>
                    <TouchableHighlight style={styles.btnArea}>
                        <EntypoIcon name={"dots-three-vertical"} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>    
    </>
}

const styles = StyleSheet.create({
    item: {
        width: "47%",
        height: 110,
        marginBottom: 28,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        marginLeft: "auto",
        marginRight: "auto",
    },
    itemCover: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    info: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingVertical: 3
    },
    container: {
        width: "97%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        paddingVertical: 0.3,
    },
    gameName: {
        fontFamily: "Poppins-Regular",
        lineHeight: 20,
        paddingLeft: 4,
        paddingTop: 2
    },
    btnArea: {
        position: "absolute",
        right: 1.5, 
        bottom: 4.5, 
        paddingHorizontal: 4,
    }
});