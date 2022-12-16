import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

export default function Item({title, img}) {
    return <View style={styles.item}>
        <Image source={img} style={styles.itemCover} />
        <View style={styles.info}>
            <Text>{title}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        width: "48.5%",
        height: 70,
        margin: 5,
        marginBottom: 28,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    itemCover: {
        width: "100%",
        height: 70,
        resizeMode: "cover",
        backgroundColor: "#000",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    info: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    }
});