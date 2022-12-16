import React from "react";
import { StyleSheet, View } from "react-native";

import WalletButton from "../../components/wallet";
import Logo from "../../components/logo";
import SearchButton from "../../components/search";

export default function Header() {
    return <>
        <View style={styles.navBar}>
            <WalletButton />
            <Logo title={"Bel"} sub={"lagio"} />
            <SearchButton />
        </View>
    </>
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "95%",
        justifyContent: "center"
    }
})