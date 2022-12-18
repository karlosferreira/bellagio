import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import IonIcon from "./ionIcons";
import EntypoIcon from "./entypo";

export default function Item({title, img}) {
    return <>
        <View style={styles.item}>
            <Image source={img} style={styles.itemCover} />
            <View style={styles.info}>
                <View style={styles.container}>
                    <Text style={styles.gameName}>{title}</Text>
                    <View style={{position: "absolute", right: 3.5, bottom: 0}}>
                        <EntypoIcon name={"dots-three-vertical"} />
                    </View>
                </View>
            </View>
        </View>    
    </>
}

const styles = StyleSheet.create({
    item: {
        width: 145,
        height: 90,
        margin: 5,
        marginBottom: 28,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    itemCover: {
        width: 145,
        height: 90,
        resizeMode: "cover",
        backgroundColor: "#000",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    info: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    container: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 4,
        paddingTop: 1.5,
        flexDirection: "row",
    },
    gameName: {
        fontSize: 12,
    }
});