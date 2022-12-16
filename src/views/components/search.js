import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchButton() {
    return <>
        <View style={styles.searchButton}>
            <Icon name={"search-sharp"} size={18} style={styles.searchIcon}/>
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