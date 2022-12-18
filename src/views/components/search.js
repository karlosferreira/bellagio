import React from "react";
import { StyleSheet, View } from "react-native";
import IonIcon from "./ionIcons";

export default function SearchButton() {
    return <>
        <View style={styles.searchButton}>
            <IonIcon name={"search-sharp"} size={18} />
        </View>
    </>
}

const styles = StyleSheet.create({
    searchIcon: {},
    searchButton: {
        position: "absolute",
        right: 0,
        bottom: 7
    }
});