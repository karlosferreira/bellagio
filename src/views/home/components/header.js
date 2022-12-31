import React from "react";
import { StyleSheet, View } from "react-native";

import WalletButton from "../../components/wallet";
import Logo from "../../components/logo";
import DarkModToggle from "../../components/darkmod";

export default function Header() {
    return <>
        <View style={styles.navBar}>
            <WalletButton />
            <Logo title={"Bet"} sub={"21"} />
            <DarkModToggle />
        </View>
    </>
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "95%",
        padding: 10.5,
        justifyContent: "center"
    }
})